import v from '@validate';

export let customerValidator = v.obj({
    nombre: v.str().required(),
    apellido: v.str().required(),
    razon_social: v.str(),
    domicilio: v.str().required(),
    correo: v.str().email().required(),
    telefono: v.str().required()
})