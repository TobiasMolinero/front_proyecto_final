<script lang="ts">
    import { IconNavigator } from "@lib";
    import { push } from "svelte-spa-router";

    export let month: string
    export let url: string
    export let title: string = ''

    let totalBills: number = 10000

    function formatearNumeroConPuntos(numero: number) {
        return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

</script>

<button on:click={() => push(url)} title={title} class="w-full border border-slate-300 rounded-md p-6 shadow-md hover:shadow-none hover:border-blue-950 transition">
    <h3 class="text-start font-[500]">Tus gastos de {month}</h3>
    <div class="flex justify-between items-center">
        <span class="text-[26px] font-[700] text-red-500">
            $
            <span class="text-[38px] font-[700] text-red-500">
                {formatearNumeroConPuntos(totalBills)}
            </span>
        </span>
        <button on:click={() => push(url)} title={title} >
            <IconNavigator classes="h-[25px] w-[25px] fill-blue-950 cursor-pointer hover:fill-[var(--regular-blue)]" />
        </button>
    </div>
</button>
