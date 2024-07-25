<script lang="ts">
    import { onMount } from "svelte";
    import { Loader, ButtonTable } from "@lib"; 
    import { http } from '@controlers';
    import { gral_routes } from "@routes";
    import { question } from "@utils-alerts"; 
    import { updateCustomers, storeCustomer } from "../store";
    import { deleteCustomer, filterCustomers } from "../helpers";
    import type { EventButtonEdit } from "@utils-interfaces";
    import type { Customer } from "../interfaces";
    import FormCustomer from "./FormCustomer.svelte";
    
    export let valueFilter: string = '';

    let customers: Customer[];
    let copyCustomers: Customer[];
    let isLoading: boolean = true;
    let form: boolean = false;
    let id_customer: number;
    
    const openCloseForm = (e: EventButtonEdit) => {
        id_customer = e.detail.id;
        form ? form = false : form = true;
    }

    const getCustomers = () => {
        http.get(gral_routes.all_customers).then(response => {
            customers = response.data;
            $storeCustomer = customers
            isLoading = false;
        })
    }

    const selectCustomer = (id: number) => {  
        question.fire({
            text: '¿Seguro que desea dar de baja este cliente? Esta acción es irreversible.'
        })
        .then((response) => {
            if(response.isConfirmed){
                deleteCustomer(id).then(() => {
                    getCustomers();
                })
            }
        })
    }

    onMount(() => {
        if($storeCustomer.length === 0){
            getCustomers();
        } else {
            customers = $storeCustomer
        }
    })

    updateCustomers.subscribe(() => {
        getCustomers();
    })

    $: if(valueFilter.trim() === ''){
        copyCustomers = customers;
    } else {
        copyCustomers = filterCustomers(customers, valueFilter);
    }

</script>

<div class="grow mt-[10px]">
    <div class="container-table max-w-[100%] max-h-[385px] border-t-2 border-slate-800 grid place-start overflow-y-auto">
        <table class="relative border-collapse text-center w-full">
            <thead class="sticky top-0 bg-white shadow-[-4px_1px_1px_1px_#0f172a] z-[2]">
                <tr class="*:p-[10px_20px] *pb-[50px] *:text-neutral-700">
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Nro. Documento</th>
                    <th>Razon social</th>
                    <th>Dirección</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody class="divide-y">
                {#if isLoading}
                    <tr>
                        <td colspan="7" class="p-[15px]">
                            <Loader />
                        </td>
                    </tr>
                {:else if customers} 
                        {#each copyCustomers as customer}
                            <tr class="*:p-[10px] hover:bg-neutral-200">
                                <td>{customer.nombre}</td>
                                <td>{customer.apellido || '-'}</td>
                                <td>{customer.nro_documento || '-'}</td>
                                <td>{customer.razon_social || '-'}</td>
                                <td>{customer.domicilio || '-'}</td>
                                <td>{customer.correo || '-'}</td>
                                <td>{customer.telefono || '-'}</td>
                                <td class="flex justify-center items-center gap-x-[5px]">
                                    <ButtonTable className="edit" title="Editar usuario" id={customer.id_cliente} on:openform={openCloseForm}/>
                                    <ButtonTable className="delete" title="Eliminar usuario" id={customer.id_cliente} on:delete={() => selectCustomer(customer.id_cliente)}/>
                                </td>
                            </tr>
                        {:else}
                            <tr>
                                <td colspan="7" class="p-[15px] font-[600] text-[24px]">
                                    <h3>No se encontraron resultados</h3>
                                </td>
                            </tr>
                        {/each}
                {/if}
            </tbody>
        </table>
    </div>
</div>

{#if form}
    <FormCustomer id={id_customer} isEdit={true} on:closeform={openCloseForm}/>
{/if}

<style>
    .container-table{
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
    }
</style>
