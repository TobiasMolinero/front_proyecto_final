export interface EventButtonEdit{
    detail: {
        id: number
    }
}

export interface RolInterface {
    id_rol_usuario: number
    descripcion: string
}

export interface CategoryProductInterface{
    id_categoria_producto: number
    categoria_producto: string
}

export interface CategoryBillInterface{
    id_categoria_gasto: number
    categoria: string
}

export interface EventSearcher {
    detail: {value: string}
}

export interface SelectProduct {
    id_producto: number
    nombre_producto: string
}