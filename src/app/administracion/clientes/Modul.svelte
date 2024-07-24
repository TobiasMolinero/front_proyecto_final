<script lang="ts">
    import MenuCustomers from "./components/MenuCustomers.svelte";
    import TableCustomers from "./components/TableCustomers.svelte";
    import type { EventSearcher } from "@utils-interfaces";

    let valueFilter: string;

    const getValueFilter = (e: EventSearcher) => {
        valueFilter = e.detail.value;
    }

</script>

<div class="flex flex-col h-full">
    <h2 class="font-[700] text-[24px] text-start pt-[20px] px-[20px]">Seguimiento de clientes</h2>
    <MenuCustomers on:sendvalue={getValueFilter} />
    <TableCustomers {valueFilter} />
</div>

