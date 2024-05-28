import { writable } from 'svelte/store';

export let updateProducts = writable(false)

export let setUpdateProducts = () => {
    updateProducts.update(value => !value)
}
