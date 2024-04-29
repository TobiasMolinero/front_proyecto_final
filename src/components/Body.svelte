<script lang="ts">
    import Routes from "../routes.svelte";
    import Header from "./Header.svelte";
</script>

<div class="body">
    <Header />
    <Routes />
</div>

<style>
    .body{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
</style>