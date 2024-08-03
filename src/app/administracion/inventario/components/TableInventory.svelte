<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { Loader } from "@lib";
    import { isLoading, storeInventory } from "../store";
    import { getInventory } from "../helpers";

    onMount(() => {
        if($storeInventory.length === 0){
            getInventory()
        } else {
            $isLoading = false
        }
    })

    onDestroy(() => {
        $isLoading = true
    })

</script>

<div class="grow mt-[10px]">
    <div class="container-table max-w-[100%] max-h-[385px] border-t-2 border-slate-800 grid place-start overflow-y-auto">
        <table class="relative border-collapse text-center w-full">
            <thead class="sticky top-0 bg-white shadow-[-4px_1px_1px_1px_#0f172a] z-[2]">
                <tr class="*:p-[10px_20px] *pb-[50px] *:text-neutral-700">
                    <th>Cod. Producto</th>
                    <th>Nombre </th>
                    <th>Categoría</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody class="divide-y">
                {#if $isLoading}
                    <tr>
                        <td colspan="7" class="p-[15px]">
                            <Loader />
                        </td>
                    </tr>
                {:else if $storeInventory} 
                        {#each $storeInventory as product}
                            <tr class="*:p-[10px] hover:bg-neutral-200">
                                <td class="w-[20%]">{product.cod_producto}</td>
                                <td>{product.nombre_producto}</td>
                                <td>{product.categoria_producto}</td>
                                <td class="font-[700] text-[20px] {product.stock <= 5 ? 'text-red-500' : ''}">{product.stock}</td>
                            </tr>
                        {:else}
                            <tr>
                                <td colspan="5" class="p-[15px] font-[600] text-[24px]">
                                    <h3>No se encontraron resultados</h3>
                                </td>
                            </tr>
                        {/each}
                {/if}
            </tbody>
        </table>
    </div>
</div>


<style>
    .container-table{
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
    }
</style>
