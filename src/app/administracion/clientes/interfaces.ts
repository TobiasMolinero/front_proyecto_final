export interface DataCustomer{
    nombre: string
    apellido: string
    razon_social: string
    domicilio: string
    correo: string
    telefono: string
}

export interface EventSearcher{
    detail: {
        value: string
    }
}

export type Customers = {
    id_cliente: number,
    nombre: string,
    apellido: string,
    razon_social: string,
    domicilio: string,
    correo: string,
    telefono: string
}