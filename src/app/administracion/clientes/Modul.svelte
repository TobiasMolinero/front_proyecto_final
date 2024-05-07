<script lang="ts">
    import MenuCustomers from "./components/MenuCustomers.svelte";
    import TableCustomers from "./components/TableCustomers.svelte";
</script>

<div class="section">
    <h2 class="title">Seguimiento de clientes</h2>
    <MenuCustomers />
    <TableCustomers />
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