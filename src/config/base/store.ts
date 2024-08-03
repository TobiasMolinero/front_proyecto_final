import { get, writable } from "svelte/store";
import { location, push } from 'svelte-spa-router'

let login = {
    isLogin: false,
    userName: '',
    rol: 'admin',
    id: 0
}

const localStorageLogin = (userName: string, rol: string, id: number) => {
    localStorage.setItem('login', JSON.stringify(true))
    localStorage.setItem('id_user', JSON.stringify(id))
    localStorage.setItem('username', userName)
    localStorage.setItem('rol', rol)
}

export let loginAction = {
    login: (userName: string, rol: string, id: number) => {
        
        loginStore.update((value) => {
            value.isLogin = true;
            value.userName = userName;
            value.rol = rol;
            value.id = id;
            return value;
        })
        
        if(get(location) === '/'){
            push('/Administracion/Inicio') 
        } else {
            push(get(location))
        }

        localStorageLogin(userName, rol, id)
    },

    logout: () => {
        loginStore.update(value => {
            value.isLogin = false;
            value.userName = '';
            value.rol = '';
            value.id = 0;
            return value;
        })
        localStorage.clear();
    }
}


export let loginStore = writable(login);