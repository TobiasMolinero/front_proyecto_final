<script lang="ts">
    import { onMount } from 'svelte';
    import { http } from '@controlers';
    import { gral_routes } from '@routes';
    import { ButtonTable, Loader } from '@lib';
    import { question } from '@utils-alerts';
    import type { EventButtonEdit } from '@utils-interfaces';
    import { updateProducts } from '../store';
    import FormProduct from './FormProduct.svelte';
    import { deleteProduct } from '../helpers';
    

    let isLoading: boolean = true;
    let products: any[] = [];
    let form: boolean = false;
    let id_product: number; 

    const getProducts = () => {
        http.get(gral_routes.all_products).then(response => {
            products = response.data;
            isLoading = false;
        })
    }

    const openCloseForm = (e: EventButtonEdit ) => {
        id_product = e.detail.id;
        form ? form = false : form = true;
    }

    const selectProduct = (id: number) => {  
        question.fire({
            text: '¿Seguro que desea dar de baja este producto? Esta acción es irreversible.'
        })
        .then((response) => {
            if(response.isConfirmed){
                deleteProduct(id).then(() => {
                    getProducts();
                })
            }
        })
    }

    updateProducts.subscribe(() => {
        getProducts();
    })

    onMount(() => {
        getProducts();
    })
</script>

<div class="section-table">
    <div class="container-table">
        <table>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Descripción</th>
                    <th>Precio</th>
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
                {:else if products}
                    {#each products as product}
                        <tr>
                            <td>{product.cod_producto}</td>
                            <td>{product.nombre_producto}</td>
                            <td>{product.categoria}</td>
                            <td>{product.descripcion !== '' ? product.descripcion : ' - '}</td>
                            <td>{product.precio}</td>
                            <td class="actions">
                                <ButtonTable id={product.id_producto} title='Editar producto' className="edit" on:openform={openCloseForm}/> 
                                <ButtonTable id={product.id_producto} title='Eliminar producto' className="delete" on:delete={() => selectProduct(product.id_producto)}/> 
                            </td>
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    </div>
</div>

{#if form}
    <FormProduct id={id_product} isEdit={true} on:closeform={openCloseForm}/>
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
