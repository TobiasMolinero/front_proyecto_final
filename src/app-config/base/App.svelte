<script lang="ts">
  import '../start';
  import Login from '../../components/Login.svelte';
  import Header from "../../components/Header.svelte";
  import Body from "../../components/Body.svelte";
  import Footer from "../../components/Footer.svelte";

  let login: boolean = true;

</script>

<div class="main">
  {#if login}
    <Login />
  {:else}
    <Header />
    <Body />
    <Footer /> 
  {/if}
</div>

<style>
  .main{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
