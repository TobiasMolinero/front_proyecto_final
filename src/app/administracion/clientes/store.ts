import { writable } from 'svelte/store';
import type { Customer } from './interfaces';

export let updateCustomers = writable(false)

export let setUpdateCustomers = () => {
    updateCustomers.update(value => !value)
}

export let storeCustomer = writable<Customer[]>([])
