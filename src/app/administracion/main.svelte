<script lang="ts">
    import Router from "svelte-spa-router";
    import routes from './routes';
    
    export let prefix: string;
</script>

<main class="grow overflow-auto">
    <Router {prefix} {routes}/>
</main>