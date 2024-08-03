<script lang="ts">
  import MenuInventory from "./components/MenuInventory.svelte";
  import TableInventory from "./components/TableInventory.svelte";


</script>

<div class="flex flex-col h-full">
    <h2 class="font-[700] text-[24px] text-start pt-[20px] px-[20px]">Inventario</h2>
    <MenuInventory />
    <TableInventory />
</div>
