<script lang="ts">
    import MenuUsers from "./components/MenuUsers.svelte";
    import TableUsers from "./components/TableUsers.svelte";
</script>

<div class="flex flex-col h-full">
    <h2 class="font-[600] text-[25px] text-center p-[10px]">Gestionar usuarios</h2>
    <MenuUsers />
    <TableUsers />
</div>