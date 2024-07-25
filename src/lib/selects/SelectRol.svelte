<script lang="ts">
    import { onMount } from 'svelte';
    import { http } from '@controlers';
    import { listRolOptions } from '@lib-store';

    export let id: string;
    export let label: string;
    export let error: boolean = false;
    export let value: string;
    export let route: string;

    const getOptions = () => {
        http.get(route).then(response => {
            $listRolOptions = response.data
        })
    }

    onMount(() => {
        if($listRolOptions.length === 0){
            getOptions();
        } else {
            return null;
        }
    })
</script>

<div class="flex flex-col gap-[5px]">
    <label for={id} class={`${error ? 'text-[red]' : ''}`}>{label}</label>
    <select id={id} bind:value class={`w-full h-[35px] rounded-[10px] border p-[0_10px] cursor-pointer ${error ? 'border-[red] focus-visible:outline-none' : 'border-[#00000050] focus-visible:outline-[1px_solid_var(--dark-blue)]'}`}>
        {#each $listRolOptions as option}
            <option value={option.id_rol_usuario}>{option.descripcion}</option>
        {/each}
    </select>
</div>