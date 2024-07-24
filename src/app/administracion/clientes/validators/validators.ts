import v from '@validate';

export let customerValidator = v.obj({
    nombre: v.str().required(),
    apellido: v.str(),
    nro_documento: v.num(),        
    razon_social: v.str(),
    domicilio: v.str(),
    correo: v.str().email(),
    telefono: v.str()
})