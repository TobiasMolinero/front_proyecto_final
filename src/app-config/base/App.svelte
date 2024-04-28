<script lang="ts">
  import '../start';
  import Login from "../../components/Login.svelte";
  import Header from "../../components/Header.svelte";
  import Body from "../../components/Body.svelte";
  import Footer from "../../components/Footer.svelte";

  let login: boolean = false;

</script>

<div class="main">
  {#if login}
    <Header />
    <Body />
    <Footer /> 
  {:else}
    <Login />
  {/if}
</div>

<style>
  .main{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
