export interface DataProduct{
    cod_producto: string
    nombre_producto: string
    categoria: string
    descripcion: string
    precio: string
}

export interface Product{
    cod_producto: string
    nombre_producto: string
    id_categoria_producto: number
    descripcion: string
    precio: number
}

export interface CategoryProduct{
    categoria: string
}