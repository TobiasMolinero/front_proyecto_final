<script lang="ts">
    import MenuProducts from './components/MenuProducts.svelte';
    import TableProducts from './components/TableProducts.svelte';
    import type { EventSearcher } from '@utils-interfaces';

    let valueFilter: string;

    const getValueFilter = (e: EventSearcher) => {
        valueFilter = e.detail.value;
    }

</script>

<div class="flex flex-col h-[100%]">
    <h2 class="font-[600] text-[25px] text-center p-[10px]">Lista de productos</h2>
    <MenuProducts on:sendvalue={getValueFilter} />
    <TableProducts valueFilter={valueFilter} />
</div>
