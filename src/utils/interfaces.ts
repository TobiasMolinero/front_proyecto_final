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
    descripcion: string
}

export interface EventSearcher {
    detail: {value: string}
}