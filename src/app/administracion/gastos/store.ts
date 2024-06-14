import { writable } from 'svelte/store';

const bills = [{
    id_gasto: 0,
    id_categoria_gasto: 0,
    categoria: '',
    fecha: '',
    detalle: '',
    importe: 0,
}]

export let storeBills = writable(bills);