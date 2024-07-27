import { writable } from 'svelte/store';
import type { RolInterface, CategoryProductInterface, CategoryBillInterface } from '@utils-interfaces';

export let listRolOptions = writable<RolInterface[]>([]);
export let listCategoryProduct = writable<CategoryProductInterface[]>([]);
export let listCategoryBills = writable<CategoryBillInterface[]>([]); 

