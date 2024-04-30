import { http } from '@controlers';

export const getUsers = async() => {
    const res = await http.get('/usuarios/listarusuarios');
    const users = await res.data;
    console.log(users)
    return users;
}