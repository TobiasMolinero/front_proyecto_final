<script lang="ts">
    import { ButtonOpenModal } from '@lib';
    import FormProduct from './FormProduct.svelte';

    let form: boolean;

    const openCloseForm = () => {
        form ? form = false : form = true;
    }
</script>

<div class="flex justify-end p-[10px_20px]">
    <div class="w-[200px] h-[45px]">
        <ButtonOpenModal text="Crear producto" on:openform={openCloseForm} />
    </div>
</div>

{#if form}
    <FormProduct isEdit={false} on:closeform={openCloseForm} />
{/if}