<script lang="ts">
  import '../start';
  import Body from "../../components/Body.svelte";
  import Header from '../../components/Header.svelte';
  import Login from '../../components/Login.svelte';
  import { loginStore } from '@store';   
</script>

<div class="main">
  {#if $loginStore.isLogin}
    <Header />
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
    flex-direction: column;
  }
</style>
