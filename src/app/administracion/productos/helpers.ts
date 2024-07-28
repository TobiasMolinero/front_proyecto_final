import { admin_routes, gral_routes } from "@routes";
import { http } from "@controlers";
import type {
  DataProduct,
  DataProductToCreateEdit,
  Product,
} from "./interfaces";
import { parsearCosto } from "@utils-helpers";

export const parseProductData = (data: DataProduct) => {
  return {
    cod_producto: data.cod_producto,
    nombre_producto: data.nombre_producto,
    descripcion: data.descripcion,
    id_categoria_producto: Number(data.categoria),
    precio: parsearCosto(data.precio),
    stock: Number(data.stock)
  };
};

export const createProduct = (data: DataProductToCreateEdit) => {
  return http.post(gral_routes.create_product, data);
};

export const editProduct = (id: number, data: DataProductToCreateEdit) => {
  return http.put(admin_routes.edit_product + id, data);
};

export const getOneProduct = (id: number) => {
  return http.get(gral_routes.one_product + id);
};

export const deleteProduct = (id: number) => {
  return http.put(admin_routes.delete_product + id);
};

export function filterProducts(products: Product[], valueFilter: string) {
  const response = products.filter((product) => {
    return (
      product.cod_producto.toLowerCase().includes(valueFilter.toLowerCase()) ||
      product.nombre_producto.toLowerCase().includes(valueFilter.toLowerCase())
    );
  });

  return response;
}
