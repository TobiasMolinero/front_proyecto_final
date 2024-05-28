import { http } from '@controlers';
import { gral_routes } from '@routes'; 

export const parsearDatosUsuario = (data: any) => {
    return {
        nombre: data.nombre,
        apellido: data.apellido,
        correo: data.correo,
        telefono: data.telefono,
        usuario: data.usuario,
        contraseña: data.contraseña,
        id_rol: +data.id_rol
    }
}
