<script lang="ts">
    import MenuUsers from "./components/MenuUsers.svelte";
    import TableUsers from "./components/TableUsers.svelte";
</script>

<div class="flex flex-col h-full">
    <h2 class="font-[700] text-[24px] text-start pt-[20px] px-[20px]">Gestionar usuarios</h2>
    <MenuUsers />
    <TableUsers />
</div>