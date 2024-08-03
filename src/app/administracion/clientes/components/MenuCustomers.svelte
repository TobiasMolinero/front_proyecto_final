<script lang="ts">
    import { ButtonOpenModal, Searcher } from '@lib';
    import FormCustomer from './FormCustomer.svelte';

    let form: boolean = false;

    const openCloseForm = () => {
        form ? form = false : form = true;
    }
</script>

<div class="p-[10px_20px] flex justify-between mt-[5px]">
    <div class="w-[300px] h-[45px]">
        <Searcher placeholder="Buscar por nombre" on:sendvalue />
    </div>
    <div class="w-[200px] h-[45px]">
        <ButtonOpenModal text="Registrar nuevo cliente" on:openform={openCloseForm} />
    </div>
</div>

{#if form}
    <FormCustomer on:closeform={openCloseForm}/>
{/if}

