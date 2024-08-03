import v from "@validate"

export const inventoryValidator = v.obj({
    id_producto: v.str().required(),
    cantidad: v.str().required()
})