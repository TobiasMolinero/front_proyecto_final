import { writable } from 'svelte/store';
import type { RolInterface, CategoryProductInterface } from '@utils-interfaces';

let rolOptions: RolInterface[] = [
    {id_rol_usuario: 0, descripcion: ''}
]

let categoryProductOptions: CategoryProductInterface[] = [
    {id_categoria_producto: 0, descripcion: ''}
]

export let listRolOptions = writable(rolOptions);
export let listCategoryProduct = writable(categoryProductOptions);
