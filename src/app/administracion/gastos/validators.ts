import v from '@validate';

export const billValidator = v.obj({
    detalle: v.str().required(),
    categoria: v.str().required(),
    fecha: v.str().required(),
    importe: v.str().required()
})

export const categoryBillValidator = v.obj({
    categoria: v.str().required()
})