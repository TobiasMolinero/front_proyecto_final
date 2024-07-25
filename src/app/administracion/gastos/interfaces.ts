//Esta interface es para tipar los datos antes de ser parseados para enviar.
export interface DataBill{
    detalle: string
    categoria: string
    fecha: string
    importe: string
}

//Esta interface sirve para tipar los datos listos para ser enviados en la petición.
export interface DataBillToCreateEdit{
    detalle: string
    id_categoria_gasto: number
    fecha: string
    importe: number
}

//Esta interface es para tipar los datos que recibimos de las peticiones get.
export interface Bill{
    id_gasto: number
    id_categoria_gasto: number
    categoria: string
    fecha: string
    detalle: string
    importe: number
}