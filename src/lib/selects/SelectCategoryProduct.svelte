<script lang="ts">
    import { onMount } from 'svelte';
    import { http } from '@controlers';
    import { listCategoryProduct } from '@lib-store';
    import { updateCategoryProduct } from '../../app/administracion/productos/store';

    export let id: string;
    export let label: string;
    export let error: boolean = false;
    export let value: string;
    export let route: string;

    
    const getOptions = () => {
        http.get(route).then(response => {
            $listCategoryProduct = response.data;
        })
    }
    
    updateCategoryProduct.subscribe(() => {
        getOptions()
    })
    
    onMount(() => {
        if($listCategoryProduct[0].id_categoria_producto === 0){
            getOptions();
        } else {
            return null;
        }
    })
</script>

<div class="flex flex-col gap-[5px]">
    <label for={id} class={`${error ? 'text-[red]' : ''}`}>{label}</label>
    <select id={id} bind:value class={`w-full h-[35px] rounded-[10px] border p-[0_10px] cursor-pointer ${error ? 'border-[red] focus-visible:outline-none' : 'border-[#00000050] focus-visible:outline-[1px_solid_var(--dark-blue)]'}`}>
        {#each $listCategoryProduct as option}
            <option value={`${option.id_categoria_producto}`}>{option.descripcion}</option>
        {/each}
    </select>
</div>