import v from '@validate';

export let userValidator = v.obj({
    nombre: v.str().required(),
    apellido: v.str().required(),
    correo: v.str().email().required(),
    telefono: v.str().min(10).max(10).required(),
    usuario: v.str().required(),
    id_rol: v.str().required(),
    contraseña: v.str().min(6).matches(/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/).required()
})