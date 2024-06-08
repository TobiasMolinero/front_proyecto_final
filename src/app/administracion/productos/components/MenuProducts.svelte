<script lang="ts">
    import { ButtonOpenModal, SelectCategoryProduct } from '@lib';
    import FormProduct from './FormProduct.svelte';
  import Searcher from '../../../../lib/inputs/Searcher.svelte';

    let form: boolean;

    const openCloseForm = () => {
        form ? form = false : form = true;
    }
</script>

<div class="flex justify-between p-[10px_20px]">
    <div class="flex w-[300px] h-[45px]">
        <Searcher placeholder="Buscar por codigo o nombre" on:sendvalue />
    </div>
    <div class="w-[200px] h-[45px]">
        <ButtonOpenModal text="Crear producto" on:openform={openCloseForm} />
    </div>
</div>

{#if form}
    <FormProduct isEdit={false} on:closeform={openCloseForm} />
{/if}