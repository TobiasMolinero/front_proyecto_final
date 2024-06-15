import { http } from '@controlers';
import { gral_routes } from '@routes';
import { parsearCosto, formatearMoneda } from '@utils-helpers';
import type { Bill, DataBill, DataBillToCreateEdit } from './interfaces';
import dayjs from 'dayjs';

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

export function showMonthText(month: string): string {
    let monthText = dayjs(month).format('MMMM');
    monthText = monthText.charAt(0).toUpperCase() + monthText.slice(1);
    return monthText
}

export function filterBillsByMonth(value: string, array: Bill[]) {
    return array.filter(element => {
        let itemMonth: string = element.fecha.split('-')[1]
        return itemMonth === value
    })
}

export function calculateTotalByMonth(array: Bill[]): string {
    
    let total: number;
    let arrayOfNumbers = array.map(element => {return Number(element.importe)});
    total = arrayOfNumbers.reduce((acc, actualValue) => {
        return acc + actualValue   
    }, 0)
    
    return formatearMoneda(total);
}