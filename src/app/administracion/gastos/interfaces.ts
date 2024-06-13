export interface DataBill{
    detalle: string
    categoria: string
    fecha: string
    importe: string
}

export interface DataBillToCreateEdit{
    detalle: string
    id_categoria_gasto: number
    fecha: string
    importe: number
}

export interface Bill{
    id_gasto: number
    id_categoria_gasto: number
    categoria: string
    fecha: string
    detalle: string
    importe: number
}