<script lang="ts">
    import { afterUpdate, onMount } from "svelte";
    import { http } from '@controlers';
    import { listCategoryBills } from '@lib-store';

    export let id: string;
    export let label: string;
    export let error: boolean = false;
    export let value: string;
    export let route: string;
    export let updateCategories: boolean;

    let previousUpdateValue: boolean;

    const getOptions = () => {
        http.get(route).then(response => {
            $listCategoryBills = response.data;
        })
    }
    
    onMount(() => {
        previousUpdateValue = updateCategories;
        if($listCategoryBills[0].id_categoria_gasto === 0){
            getOptions();
        } else {
            return null;
        }
    })

    afterUpdate(() => {
        if(updateCategories !== previousUpdateValue){
            getOptions();
            previousUpdateValue = updateCategories;
        }
    })
    
</script>

<div class="flex flex-col gap-[5px] grow">
    <label for={id} class={`${error ? 'text-[red]' : ''}`}>{label}</label>
    <select id={id} bind:value class={`w-full h-[35px] rounded-[10px] border p-[0_10px] cursor-pointer ${error ? 'border-[red] focus-visible:outline-none' : 'border-[#00000050] focus-visible:outline-[1px_solid_var(--dark-blue)]'}`}>
        {#each $listCategoryBills as option}
            <option value={`${option.id_categoria_gasto}`}>{option.descripcion}</option>
        {/each}
    </select>
</div>