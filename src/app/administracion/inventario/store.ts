import { writable } from "svelte/store";

export interface Inventory {
    id_producto: number
    cod_producto: string
    nombre_producto: string
    id_categoria_producto: number
    categoria_producto: string
    stock: number
}

export let isLoading = writable(true)

export let showForm = writable(false)

export let storeInventory = writable<Inventory[]>([])