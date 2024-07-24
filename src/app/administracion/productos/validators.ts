import v from '@validate';

export let productValidator = v.obj({
    cod_producto: v.str().required(),
    nombre_producto: v.str().required(),
    categoria: v.str().required(),
    descripcion: v.str(),
    precio: v.str().required()
}) 

export let categoryProductValidator = v.obj({
    categoria_producto: v.str().required()
})