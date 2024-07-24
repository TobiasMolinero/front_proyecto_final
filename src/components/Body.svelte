<script lang="ts">
    import { onMount } from "svelte";
    import Routes from "../routes.svelte";
    import LateralNav from "./LateralNav.svelte";
    import { http } from '@controlers';
    import { gral_routes } from "@routes";

    onMount(() => {
        http.get(gral_routes.validate_session);
    })
</script>

<div class="h-[100%] flex">
    <LateralNav />
    <Routes />
</div>
