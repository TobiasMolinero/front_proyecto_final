import { http } from '@controlers';
import { gral_routes } from '@routes';
import { parsearCosto } from '@utils-helpers';
import type { DataBill, DataBillToCreateEdit } from './interfaces';

export const parseBillData = (data: DataBill) => {
    return {
        detalle: data.detalle,
        id_categoria_gasto: Number(data.categoria),
        fecha: data.fecha,
        importe: parsearCosto(data.importe)
    }
}

export const getOneBill = (id: number) => {
    return http.get(gral_routes.get_one_bill + id)
}

export const createBill = (data: DataBillToCreateEdit) => {
    return http.post(gral_routes.create_bill, data)
}   

export const editBill = (id: number, data: DataBillToCreateEdit) => {
    return http.put(gral_routes.edit_bill + id, data)
}

export const deleteBill = (id: number) => {
    return http.delete(gral_routes.delete_bill + id)
}