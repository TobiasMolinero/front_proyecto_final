<script lang="ts">
    import Routes from "../routes.svelte";
    import LateralNav from "./LateralNav.svelte";
</script>

<div class="body">
    <LateralNav />
    <Routes />
</div>

<style>
    .body{
        flex-grow: 1;
        display: flex;
    }
</style>