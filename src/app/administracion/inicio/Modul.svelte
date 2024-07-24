<script lang="ts">
    import { onMount } from "svelte";
    import { loginStore } from "@store";
    import dayjs from "dayjs";
    import 'dayjs/locale/es';
    import { firstCharToUpperCase } from "./helpers";
    import BillsCard from "./componentes/BillsCard.svelte";

    dayjs.locale('es')

    let actualMonth: string = dayjs().format('MMMM')

    onMount(() => {
        actualMonth = firstCharToUpperCase(actualMonth)
    })
</script>

<div class="flex flex-col h-[100%] p-[20px]">
    <h1 class="text-[32px] font-[700] mb-[20px]">Bienvenido de vuelta {$loginStore.userName}!</h1>
    <h2 class="text-[24px] font-[500]">Un resumen de <span class="font-[700] text-[var(--dark-blue)]">{actualMonth}</span></h2>
    <div class="grow grid grid-cols-12 mt-[20px]">
        <div class="col-span-4">
            <BillsCard month={actualMonth}/>
        </div>
    </div>
</div>