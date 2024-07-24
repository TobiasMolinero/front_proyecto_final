<script lang="ts">
    import { onMount } from 'svelte';
    import { http } from '@controlers';
    import { gral_routes } from '@routes';
    import { ButtonTable, Loader } from '@lib';
    import { question } from '@utils-alerts';
    import type { EventButtonEdit } from '@utils-interfaces';
    import { updateProducts } from '../store';
    import FormProduct from './FormProduct.svelte';
    import { deleteProduct, filterProducts } from '../helpers';
    import type { Product } from '../interfaces';
    
    export let valueFilter: string = '';

    let isLoading: boolean = true;
    let products: Product[];
    let copyProducts: Product[];
    let form: boolean = false;
    let id_product: number; 

    const getProducts = () => {
        http.get(gral_routes.all_products).then(response => {
            products = response.data;
            isLoading = false;
        })
    }

    const openCloseForm = (e: EventButtonEdit) => {
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

    $: if(valueFilter.trim() === ''){
        copyProducts = products;
    } else {
        copyProducts = filterProducts(products, valueFilter)
    }
</script>

<div class="grow mt-[10px]">
    <div class="container-table max-w-[100%] max-h-[385px] border-t-2 border-slate-800 grid place-start overflow-y-auto">
        <table class="relative border-collapse text-center w-full">
            <thead class="sticky top-0 bg-white shadow-[-4px_1px_1px_1px_#0f172a] z-[2]">
                <tr class="*:p-[10px_20px] *pb-[50px] *:text-neutral-700">
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Descripción</th>
                    <th>Precio</th>
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
                {:else if products}
                    {#each copyProducts as product}
                        <tr class="*:p-[10px] hover:bg-neutral-200">
                            <td>{product.cod_producto}</td>
                            <td>{product.nombre_producto}</td>
                            <td>{product.categoria}</td>
                            <td>{product.descripcion !== '' ? product.descripcion : ' - '}</td>
                            <td>$ {product.precio}</td>
                            <td class="flex justify-center items-center gap-x-[5px]">
                                <ButtonTable id={product.id_producto} title='Editar producto' className="edit" on:openform={openCloseForm}/> 
                                <ButtonTable id={product.id_producto} title='Eliminar producto' className="delete" on:delete={() => selectProduct(product.id_producto)}/> 
                            </td>
                        </tr>
                    {:else}
                    <tr>
                        <td colspan="6" class="p-[15px] font-[600] text-[24px]">
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
    <FormProduct id={id_product} isEdit={true} on:closeform={openCloseForm}/>
{/if}


<style>
    .container-table{
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
    }
</style>
