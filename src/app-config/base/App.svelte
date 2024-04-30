<script lang="ts">
  import '../start';
  import Body from "../../components/Body.svelte";
  import LateralNav from '../../components/LateralNav.svelte';
  import Login from '../../components/Login.svelte';
  import { loginStore } from '@store';   
</script>

<div class="main">
  {#if $loginStore.isLogin}
    <LateralNav />
    <Body />
  {:else}
    <Login />
  {/if}
</div>

<style>
  .main{
    background: aliceblue;
    height: 100vh;
    width: 100vw;
    display: flex;
  }
</style>
