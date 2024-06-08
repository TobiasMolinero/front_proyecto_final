import { writable } from 'svelte/store';

export let setUpdateBills = () => {
    updateBills.update(value => !value)
}

export let setUpdateCategoryBills = () => {
    updateCategoryBills.update(value => !value)
}

export let updateBills = writable(false)
export let updateCategoryBills = writable(false)