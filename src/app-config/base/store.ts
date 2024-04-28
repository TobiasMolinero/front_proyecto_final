import { writable } from "svelte/store";

let login = {
    isLogin: false,
    userName: '',
    rol: '',
    id: 0
}

export let loginAccion = {
    login: (userName: string, rol: string, id: number) => {
        loginStore.update((value) => {
            value.isLogin = true;
            value.userName = userName;
            value.rol = rol;
            value.id = id;
            return value;
        })
    },

    logout: () => {
        loginStore.update(value => {
            localStorage.removeItem('token')
            value.isLogin = false;
            value.userName = '';
            value.rol = '';
            value.id = 0;
            return value;
        })
    }
}

export let loginStore = writable(login);