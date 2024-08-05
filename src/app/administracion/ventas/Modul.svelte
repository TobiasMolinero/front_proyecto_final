<script lang="ts">
    import { onMount } from "svelte";
    import TableSales from "./components/TableSales.svelte";
    import dayjs from "dayjs";
    import 'dayjs/locale/es';
    import { showMonthText } from "../gastos/helpers";
    import MenuSales from "./components/MenuSales.svelte";

    dayjs.locale('es')

    let actualMonth: string;
    let monthName: string;

    const updateMonth = (e: {detail: {value: string}}) => {
        actualMonth = e.detail.value;
        console.log(e.detail.value)
    }

    onMount(() => {
        actualMonth = dayjs().format('MM');
    })

    $: monthName = showMonthText(actualMonth);

</script>

<div class="flex flex-col h-[100%]">
    <h2 class="font-[700] text-[24px] text-start pt-[20px] px-[20px]">Ventas</h2>
    <MenuSales actualMonth={actualMonth} on:sendmonth={updateMonth} />
    <TableSales />
</div>