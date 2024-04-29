<script lang="ts">
  import '../start';
  import Body from "../../components/Body.svelte";
  import Login from "../../components/Login.svelte";
  import LateralNav from '../../components/LateralNav.svelte';

  let login: boolean = true;

</script>

<div class="main">
  {#if login}
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
