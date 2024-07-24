<script lang="ts">
  import '../start';
  import Body from "../../components/Body.svelte";
  import Header from '../../components/Header.svelte';
  import Login from '../../components/Login.svelte';
  import { loginStore } from '@store';   
  import { onMount } from 'svelte';

  onMount(() => {
    const storeValued = localStorage.getItem('login')
    const userName = localStorage.getItem('username')
    if(storeValued){
      $loginStore.isLogin = JSON.parse(storeValued);
      $loginStore.userName = userName ? userName : 'Usuario';
    } else {
      $loginStore.isLogin = false;
    }
  })
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
    background: #fff;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
</style>
