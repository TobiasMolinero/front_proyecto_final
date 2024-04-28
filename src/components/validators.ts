import v from '@validate';

export let loginValidator = v.obj({
    usuario: v.str().required(),
    contraseña: v.str().min(6).matches(/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/).required(),
})