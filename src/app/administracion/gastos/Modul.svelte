<script lang="ts">
    import FormBills from "./components/FormBills.svelte";
    import MenuBills from "./components/MenuBills.svelte";
    import TableBills from "./components/TableBills.svelte";
    
</script>

<div class="flex flex-col h-[100%]">
    <h2 class="font-[600] text-[25px] text-center p-[10px]">Gestión de gastos</h2>
    <MenuBills />
    <TableBills />
</div>