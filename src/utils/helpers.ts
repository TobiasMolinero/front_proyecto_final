//Esta funcion recibe como parametro el valor de costo y lo formatea para ser enviado en la petición.
export function parsearCosto(costo: string) {
  let valorCosto: number;

  const [_, valor] = costo.split("$") as [void, string]; //Se separa el string y se obtiene la parte de los numeros.

  let [entero, decimal] = valor.trim().split(",") as [string, string]; //Separamos en dos partes: enteros y decimales.
  const enteroSinPuntos = entero
    .split(".")
    .reduce((acc, valorActual) => acc + valorActual, ""); //El entero lo separamos para quitarle los puntos y juntar todo para obtener la parte entera sin puntos.

  valorCosto = parseFloat(`${enteroSinPuntos}.${decimal}`); //Obtenemos el valor final que se enviara

  return valorCosto;
}

//Funcion para formatear el valor del precio de number a string para mostrar en el input
export const formatearMoneda = (valor: number): string => {
  let valorFormateado: string = "";
  if (!isNaN(valor)) {
    valorFormateado = conversionMoneda(valor);
  } else {
    valorFormateado = "";
  }

  return valorFormateado;
};

const conversionMoneda = (value: number): string => {
  let valorFormateado: string = value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  return valorFormateado;
};
