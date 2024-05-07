import v from '@validate';

export let loginValidator = v.obj({
    usuario: v.str().required(),
    contraseña: v.str().required(),
})