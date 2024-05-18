<script lang="ts">
    import MenuProducts from './components/MenuProducts.svelte';
    import TableProducts from './components/TableProducts.svelte';
</script>

<div class="flex flex-col h-[100%]">
    <h2 class="font-[600] text-[25px] text-center p-[10px]">Lista de productos</h2>
    <MenuProducts />
    <TableProducts />
</div>
