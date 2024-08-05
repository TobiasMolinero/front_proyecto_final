<script lang="ts">
    import { onMount } from "svelte";
    import MenuBills from "./components/MenuBills.svelte";
    import TableBills from "./components/TableBills.svelte";
    import { showMonthText } from "./helpers";
    import { totalByMonth } from "./store";
    import dayjs from "dayjs";
    import 'dayjs/locale/es';

    dayjs.locale('es')
    
    let updateBills: boolean = false;
    let actualMonth: string;
    let monthName: string;
    
    const setUpdateBills = () => {
        updateBills = !updateBills
    }

    const updateMonth = (e: {detail: {month: string}}) => {
        actualMonth = e.detail.month;
        console.log(actualMonth)
    }

    onMount(() => {
        actualMonth = dayjs().format('MM');
    })

    $: monthName = showMonthText(actualMonth);
</script>

<div class="flex flex-col h-[100%]">
    <h2 class="font-[700] text-[24px] text-start pt-[20px] px-[20px]">Gestión de gastos</h2>
    <MenuBills actualMonth={actualMonth} on:getbills={setUpdateBills} on:sendmonth={updateMonth} />
    <div class="flex">
        <TableBills updateBills={updateBills} valueMonth={actualMonth}/>
        <div class="h-[150px] w-[30%] mt-[10px] ps-[40px] flex flex-col justify-center border border-dashed border-slate-900">
            <h2 class="font-[700] text-[25px]">Total {monthName}</h2>
            <span class="font-[800] text-[40px] text-red-500">{$totalByMonth}</span>
        </div>
    </div>
</div>
