<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { ButtonOpenModal } from "@lib";
    import FormBills from "./FormBills.svelte";

    export let actualMonth: string;
    let form: boolean = false;

    const dispatch = createEventDispatcher();

    const openCloseForm = () => {
        form = form ? false : true; 
    }

    const sendMonthValue = (e: any) => {
        dispatch('sendmonth', {month: e.target.value})
    }
</script>

<div class="flex justify-between p-[10px_20px] mt-[5px]">
    <div class="w-[200px] flex items-center gap-x-[10px]">
        <span class="font-[600]">Mes:</span>
        <select id="" value={actualMonth} on:input={sendMonthValue} class="w-full h-full p-[2px] border-[2px] border-[var(--dark-blue)] rounded-[20px] text-center cursor-pointer">
            <option value="01">Enero</option>
            <option value="02">Febrero</option>
            <option value="03">Marzo</option>
            <option value="04">Abril</option>
            <option value="05">Mayo</option>
            <option value="06">Junio</option>
            <option value="07">Julio</option>
            <option value="08">Agosto</option>
            <option value="09">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
        </select>
    </div>
    <div class="w-[200px] h-[45px]">
        <ButtonOpenModal text="Registrar gasto" on:openform={openCloseForm} />
    </div>
</div>

{#if form}
    <FormBills isEdit={false} on:closeform={openCloseForm} on:getbills />
{/if}

