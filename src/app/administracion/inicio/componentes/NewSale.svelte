<script lang="ts">
    import { IconNavigator } from "@lib";
    import { push } from "svelte-spa-router";

    export let url: string
    export let title: string = ''

</script>

<button on:click={() => push(url)} title={title} class="flex justify-between w-full border border-slate-300 rounded-md p-6 shadow-md hover:shadow-none hover:border-blue-950 transition">
    <h3 class="text-start font-[500]">Crear nueva venta</h3>
    <button on:click={() => push(url)} title={title} >
        <IconNavigator classes="h-[25px] w-[25px] fill-blue-950 cursor-pointer hover:fill-[var(--regular-blue)]" />
    </button>
</button>