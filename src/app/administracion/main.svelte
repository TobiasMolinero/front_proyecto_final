<script lang="ts">
    import Router from "svelte-spa-router";
    import routes from './routes';
    
    export let prefix: string;
</script>

<main class="grow">
    <Router {prefix} {routes}/>
</main>