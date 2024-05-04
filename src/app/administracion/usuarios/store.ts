import { writable } from 'svelte/store';

export let updateUsers = writable(false)

export let setUpdateUsers = () => {
    updateUsers.update(value => !value)
}
