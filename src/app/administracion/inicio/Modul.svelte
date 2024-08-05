<script lang="ts">
    import { onMount } from "svelte";
    import { loginStore } from "@store";
    import dayjs from "dayjs";
    import 'dayjs/locale/es';
    import { firstCharToUpperCase } from "./helpers";
    import BillsCard from "./componentes/BillsCard.svelte";
    import SellsCard from "./componentes/SellsCard.svelte";
  import NewSale from "./componentes/NewSale.svelte";

    dayjs.locale('es')

    let actualMonth: string = dayjs().format('MMMM')

    onMount(() => {
        actualMonth = firstCharToUpperCase(actualMonth)
    })
</script>

<div class="flex flex-col h-full p-[20px]">
    <h1 class="text-[32px] font-[700] mb-[20px]">Bienvenido de vuelta {$loginStore.userName}!</h1>
    <h2 class="text-[24px] font-[500]">Un resumen de <span class="font-[700] text-[var(--dark-blue)]">{actualMonth}</span></h2>
    <div class="flex gap-[15px] mt-[20px]">
        <div class="w-[30%] flex flex-col gap-y-[10px]">
            <BillsCard month={actualMonth} url="/Administracion/Gastos" title="Ver gastos" />
            <NewSale url="/Administracion/RegistrarVenta" title="Crear nueva venta" />
        </div>
        <div class="w-[70%]">
            <SellsCard month={actualMonth} url="/Administracion/Ventas" title="Ver ventas" />
        </div>
    </div>
</div>