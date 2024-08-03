import { gral_routes } from "@routes";
import { storeInventory, type Inventory, isLoading, showForm } from "./store";
import { http } from "@controlers";

export function getInventory(){
    storeInventory.set([])
    http.get(gral_routes.all_inventory)
    .then((res) => {
        let data: Inventory[] = res.data 
        data.forEach(element => {
            storeInventory.update(values => {
                values = [
                    ...values, 
                    {   
                        id_producto: element.id_producto, 
                        cod_producto: element.cod_producto,
                        nombre_producto: element.nombre_producto,
                        id_categoria_producto: element.id_categoria_producto,
                        categoria_producto: element.categoria_producto,
                        stock: element.stock
                    }
                ]

                return values
            })
        })

        isLoading.set(false)
    })
    .catch(() => {
        isLoading.set(false)
    })
}

export function updateStock(id: number, cantidad: number) {
    http.put(`${gral_routes.update_stock + id}`, {cantidad: cantidad})
    .then(() => {
        getInventory()
        showForm.set(false)
    })
    .catch(() => {
        showForm.set(false)
    })
}   