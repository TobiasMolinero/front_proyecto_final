<script lang="ts">
    import { ButtonOpenModal, Searcher } from '@lib';
    import FormCustomer from './FormCustomer.svelte';

    let form: boolean = false;
</script>

<div class="menu">
    <div class="container-search">
        <Searcher placeholder="Ingrese un nombre"/>
    </div>
    <div class="container-button">
        <ButtonOpenModal text="Registrar nuevo cliente"/>
    </div>
</div>

{#if form}
    <FormCustomer />
{/if}

<style>
    .menu{
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
    }

    .container-search{
        width: 300px;
        height: 45px;
    }

    .container-button{
        width: 200px;
        height: 45px;
    }
</style>