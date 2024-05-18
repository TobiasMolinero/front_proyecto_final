    import { http } from '@controlers';
    import { gral_routes, admin_routes } from "@routes";
    import type { DataCustomer, Customers } from './interfaces'; 
    
    export function createCustomer(data: DataCustomer){
        return http.post(gral_routes.create_customer, data);
    }
    
    export function editCustomer(id: number, data: DataCustomer){
        return http.put(`${gral_routes.edit_customer + id}`, data);
    }

    export function deleteCustomer(id: number){
        return http.put(`${admin_routes.delete_customer + id}`)
    }

    export function filterCustomers(customers: Customers[], valueFilter: string){

        const response = customers.filter(customer => {
            return(
                customer.nombre.toLowerCase().includes(valueFilter.toLowerCase()) ||
                customer.apellido.toLowerCase().includes(valueFilter.toLowerCase()) || 
                customer.razon_social.toLocaleLowerCase().includes(valueFilter.toLowerCase())
            )
        })

        return response;
    }