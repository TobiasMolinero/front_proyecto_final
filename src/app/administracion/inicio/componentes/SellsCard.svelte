<script lang="ts">
    import { IconNavigator } from "@lib";
    import { push } from "svelte-spa-router";

    export let month: string
    export let url: string
    export let title: string = ''
</script>

<button on:click={() => push(url)} title={title} class="w-full flex flex-col items-stretch justify-start border border-slate-300 rounded-md p-6 shadow-md hover:shadow-none hover:border-blue-950 transition">
    <div class="flex justify-between items-center">
        <h3 class="text-start font-[500]">Ventas de {month}</h3>
        <IconNavigator classes="h-[25px] w-[25px] fill-blue-950 cursor-pointer hover:fill-[var(--regular-blue)]"/>
    </div>
    <div class="mt-[10px]">
        <div class="max-h-[320px] max-w-[calc(100%-1px)] overflow-auto">
            <table class="relative w-full border-collapse">
                <thead class="sticky top-0 bg-white shadow-[-4px_1px_1px_1px_#0f172a]">
                    <tr class="*:px-[20px] *pb-[50px] *:text-neutral-700">
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Monto</th>
                        <th>Otro campo</th>
                        <th>Otro campo</th>
                    </tr>
                </thead>
                <tbody class="text-[14px] font-[500] mt-[20px] divide-y">
                    <tr class="*:h-[10px] *:text-slate-600 *:p-[5px_10px]">
                        <td>24-07-2024</td>
                        <td>Pedro</td>
                        <td>$ 4000</td>
                        <td>algo</td>
                        <td>algo</td>
                    </tr>
                    <tr class="*:h-[10px] *:text-slate-600 *:p-[5px_10px]">
                        <td>24-07-2024</td>
                        <td>Pedro</td>
                        <td>$ 4000</td>
                        <td>algo</td>
                        <td>algo</td>
                    </tr>
                    <tr class="*:h-[10px] *:text-slate-600 *:p-[5px_10px]">
                        <td>24-07-2024</td>
                        <td>Juan</td>
                        <td>$3000</td>
                        <td>algo</td>
                        <td>algo</td>
                    </tr>
                    <tr class="*:h-[10px] *:text-slate-600 *:p-[5px_10px]">
                        <td>24-07-2024</td>
                        <td>Juan</td>
                        <td>$3000</td>
                        <td>algo</td>
                        <td>algo</td>
                    </tr>
                    <tr class="*:h-[10px] *:text-slate-600 *:p-[5px_10px]">
                        <td>24-07-2024</td>
                        <td>Juan</td>
                        <td>$3000</td>
                        <td>algo</td>
                        <td>algo</td>
                    </tr>
                    <tr class="*:h-[10px] *:text-slate-600 *:p-[5px_10px]">
                        <td>24-07-2024</td>
                        <td>Juan</td>
                        <td>$3000</td>
                        <td>algo</td>
                        <td>algo</td>
                    </tr>

                    <tr class="*:h-[10px] *:text-slate-600 *:p-[5px_10px]">
                        <td>24-07-2024</td>
                        <td>Juan</td>
                        <td>$3000</td>
                        <td>algo</td>
                        <td>algo</td>
                    </tr>
                    <tr class="*:h-[10px] *:text-slate-600 *:p-[5px_10px]">
                        <td>24-07-2024</td>
                        <td>Juan</td>
                        <td>$3000</td>
                        <td>algo</td>
                        <td>algo</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</button>

<style>
    div {
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
    }
</style>