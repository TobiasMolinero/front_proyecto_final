<script lang="ts">
    import MenuUsers from "./components/MenuUsers.svelte";
    import TableUsers from "./components/TableUsers.svelte";
</script>

<div class="section">
    <h2 class="title">Gestionar usuarios</h2>
    <MenuUsers />
    <TableUsers />
</div>







<style>
    .section{
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .title{
        padding: 10px;
        text-align: center;
    }
</style>