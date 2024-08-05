<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let value: string;
    export let id: string = ''

    const dispatch = createEventDispatcher()

    const handleSelect = (e: any) => {
        dispatch('sendmonth', {value: e.target.value})
    }

</script>

<span class="font-[600]">Mes:</span>
<select id={id} value={value} on:input={handleSelect} class="w-full h-full p-[2px] border-[2px] border-[var(--dark-blue)] rounded-[20px] text-center cursor-pointer">
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