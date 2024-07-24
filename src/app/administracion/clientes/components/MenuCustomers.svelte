<script lang="ts">
    import { ButtonOpenModal, Searcher } from '@lib';
    import FormCustomer from './FormCustomer.svelte';

    let form: boolean = false;

    const openCloseForm = () => {
        form ? form = false : form = true;
    }
</script>

<div class="menu mt-[5px]">
    <div class="container-search">
        <Searcher placeholder="Buscar por nombre" on:sendvalue />
    </div>
    <div class="container-button">
        <ButtonOpenModal text="Registrar nuevo cliente" on:openform={openCloseForm} />
    </div>
</div>

{#if form}
    <FormCustomer on:closeform={openCloseForm}/>
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