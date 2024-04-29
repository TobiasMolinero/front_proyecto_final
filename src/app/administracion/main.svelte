<script lang="ts">
    import Router from "svelte-spa-router";
    import routes from './routes';
    
    export let prefix: string;
</script>

<main>
    <Router {prefix} {routes}/>
</main>

<style>
    main{
        flex: 1;
    }
</style>