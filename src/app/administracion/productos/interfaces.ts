export interface DataProduct{
    cod_producto: string
    nombre_producto: string
    categoria: string
    descripcion: string
    precio: string
    stock: string
}

export interface DataProductToCreateEdit{
    cod_producto: string
    nombre_producto: string
    descripcion: string
    id_categoria_producto: number
    precio: number
    stock: number
}

export interface Product{
    id_producto: number
    cod_producto: string
    nombre_producto: string
    id_categoria_producto: number
    categoria: string
    descripcion: string
    precio: number
}

export interface CategoryProduct{
    categoria: string
}