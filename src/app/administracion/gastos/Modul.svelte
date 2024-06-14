<script lang="ts">
  import { onMount } from "svelte";
    import MenuBills from "./components/MenuBills.svelte";
    import TableBills from "./components/TableBills.svelte";
    import dayjs from "dayjs";
    import 'dayjs/locale/es';

    dayjs.locale('es')
    
    let updateBills: boolean = false;
    let actualMonth: string;
    let monthName: string;
    
    const setUpdateBills = () => {
        updateBills = !updateBills
    }

    const showMonthText = (month: string) => {
        let monthText = dayjs(actualMonth).format('MMMM');
        monthText = monthText.charAt(0).toUpperCase() + monthText.slice(1);
        return monthText
    }

    const updateMonth = (e: {detail: {month: string}}) => {
        actualMonth = e.detail.month;
    }

    onMount(() => {
        actualMonth = dayjs().format('M');
    })

    $: monthName = showMonthText(actualMonth);
</script>

<div class="flex flex-col h-[100%]">
    <h2 class="font-[600] text-[25px] text-center p-[10px]">Gestión de gastos</h2>
    <MenuBills actualMonth={actualMonth} on:getbills={setUpdateBills} on:sendmonth={updateMonth} />
    <div class="flex">
        <TableBills updateBills={updateBills}/>
        <div class="h-[150px] w-[30%] m-[20px_0] ps-[40px] flex flex-col justify-center border border-dashed border-slate-900">
            <h2 class="font-[700] text-[25px]">Total {monthName}</h2>
            <span class="font-[800] text-[40px] text-red-600">$ 0,00</span>
        </div>
    </div>
</div>
