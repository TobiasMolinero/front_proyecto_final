import { writable } from 'svelte/store';
import type { RolInterface, CategoryProductInterface, CategoryBillInterface } from '@utils-interfaces';

let rolOptions: RolInterface[] = [
    {id_rol_usuario: 0, descripcion: ''}
]

let categoryProductOptions: CategoryProductInterface[] = [
    {id_categoria_producto: 0, descripcion: ''}
]

let categoryBillOptions: CategoryBillInterface[] = [
    {id_categoria_gasto: 0, descripcion: ''}
]

export let listRolOptions = writable(rolOptions);
export let listCategoryProduct = writable(categoryProductOptions);
export let listCategoryBills = writable(categoryBillOptions); 
