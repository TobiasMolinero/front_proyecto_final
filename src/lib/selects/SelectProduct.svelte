<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { http } from "@controlers";
    import { gral_routes } from "@routes";
    import { listProducts } from "@lib-store";
    import { updateProducts } from "../../app/administracion/productos/store";
    import type { SelectProduct } from "@utils-interfaces";

    export let id: string;
    export let label: string;
    export let error: boolean = false;
    export let value: string;

    const getOptions = () => {
        http.get(gral_routes.all_products).then((res) => {
            $listProducts = res.data
        })
    }

    updateProducts.subscribe(() => {
        getOptions()
    })

    onMount(() => {
        if($listProducts.length === 0){
            getOptions()
        } else {
            return null
        }
    })

</script>

<div class="flex flex-col gap-[5px] grow">
    <label for={id} class={`${error ? 'text-[red]' : ''}`}>{label}</label>
    <select id={id} bind:value class={`w-full h-[35px] rounded-[10px] border p-[0_10px] cursor-pointer ${error ? 'border-[red] focus-visible:outline-none' : 'border-[#00000050] focus-visible:outline-[1px_solid_var(--dark-blue)]'}`}>
        {#each $listProducts as option}
            <option value={`${option.id_producto}`}>{option.nombre_producto}</option>
        {/each}
    </select>
</div>