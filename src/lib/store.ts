import { writable } from 'svelte/store';
import type { RolInterface, CategoryProductInterface, CategoryBillInterface, SelectProduct } from '@utils-interfaces';

export let listRolOptions = writable<RolInterface[]>([]);
export let listCategoryProduct = writable<CategoryProductInterface[]>([]);
export let listCategoryBills = writable<CategoryBillInterface[]>([]); 
export let listProducts = writable<SelectProduct[]>([])

