import { writable } from 'svelte/store';


export let setUpdateProducts = () => {
    updateProducts.update(value => !value)
}

export let setUpdateCategoryProduct = () => {
    updateCategoryProduct.update(value => !value)
}

export let updateProducts = writable(false)
export let updateCategoryProduct = writable(false)

