import { writable } from 'svelte/store';

export let updateCustomers = writable(false)

export let setUpdateCustomers = () => {
    updateCustomers.update(value => !value)
}
