<script lang="ts">
    import { onMount } from "svelte";
    import { Loader, ButtonTable } from "@lib"; 
    import { http } from '@controlers';
    import { gral_routes } from "@routes";
    import { question } from "@utils-alerts"; 
    import { updateCustomers } from "../store";
    import { deleteCustomer, filterCustomers } from "../helpers";
    import type { EventButtonEdit } from "@utils-interfaces";
    import type { Customers } from "../interfaces";
    import FormCustomer from "./FormCustomer.svelte";
    
    export let valueFilter: string = '';

    let customers: Customers[];
    let copyCustomers: Customers[];
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
        getCustomers();
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

<div class="section-table">
    <div class="container-table">
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Razon social</th>
                    <th>Dirección</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {#if isLoading}
                    <tr>
                        <td colspan="7">
                            <Loader />
                        </td>
                    </tr>
                {:else if customers} 
                        {#each copyCustomers as customer}
                            <tr>
                                <td>{customer.nombre}</td>
                                <td>{customer.apellido}</td>
                                <td>{customer.razon_social || '-'}</td>
                                <td>{customer.domicilio}</td>
                                <td>{customer.correo}</td>
                                <td>{customer.telefono}</td>
                                <td class="actions">
                                    <ButtonTable className="edit" title="Editar usuario" id={customer.id_cliente} on:openform={openCloseForm}/>
                                    <ButtonTable className="delete" title="Eliminar usuario" id={customer.id_cliente} on:delete={() => selectCustomer(customer.id_cliente)}/>
                                </td>
                            </tr>
                        {:else}
                            <tr>
                                <td colspan="7">
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
    .section-table{
        flex: 1;
        padding: 20px;
    }
    
    .container-table{
        max-width: 100%;
        max-height: 385px;
        display: grid;
        place-items: start;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
        border: 1px solid var(--dark-blue);
    }
    
    table{
        background: white;
        text-align: center;
        border-collapse: collapse;
        width: 100%;
    }
    
    thead{
        background: var(--dark-blue);
        color: white;
        height: 50px;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 2;
    }
    
    tbody tr td{
        padding: 15px
    }
    
    .actions{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
</style>
