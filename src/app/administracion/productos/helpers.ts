import { admin_routes, gral_routes } from "@routes";
import { http } from '@controlers';
import type { DataProduct, Product } from "./interfaces";

export const parseProductData = (data: DataProduct) => {
    return {
        cod_producto: data.cod_producto,
        nombre_producto: data.nombre_producto,
        descripcion: data.descripcion,
        id_categoria_producto: Number(data.categoria),
        precio: parsearCosto(data.precio)
    }
}

//Esta funcion recibe como parametro el valor de costo y lo formatea para ser enviado en la petición.
function parsearCosto(costo: string){

    let valorCosto: number;

    const [ _ , valor] = costo.split('$') as [void, string]; //Se separa el string y se obtiene la parte de los numeros.
    
    let [entero, decimal] = valor.trim().split(',') as [string, string]; //Separamos en dos partes: enteros y decimales.
    const enteroSinPuntos = entero.split('.').reduce((acc, valorActual) => acc + valorActual, '');  //El entero lo separamos para quitarle los puntos y juntar todo para obtener la parte entera sin puntos.

    valorCosto = parseFloat(`${enteroSinPuntos}.${decimal}`); //Obtenemos el valor final que se enviara

    return valorCosto;
}

//Funcion para formatear el valor del precio de number a string para mostrar en el input
export const formatearMoneda = (valor: number): string => {
    let valorFormateado: string = '';
    if (!isNaN(valor)) {
        valorFormateado = conversionMoneda(valor);
    } else {
        valorFormateado = '';
    }

    return valorFormateado;
};

const conversionMoneda = (value: number): string => {
    let valorFormateado: string = value.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });

    return valorFormateado;
};


export const createProduct = (data: Product) => {
    return http.post(gral_routes.create_product, data);
}

export const editProduct = (id:number, data: Product) => {
    return http.put(admin_routes.edit_product + id, data);
}

export const getOneProduct = (id: number) => {
    return http.get(gral_routes.one_product + id);
}

export const deleteProduct = (id: number) => {
    return http.put(admin_routes.delete_product + id);
}