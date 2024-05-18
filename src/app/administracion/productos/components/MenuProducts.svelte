<script lang="ts">
    import { ButtonOpenModal } from '@lib';
    import FormProduct from './FormProduct.svelte';

    let form: boolean;
</script>

<div class="flex justify-end p-[10px_20px]">
    <div class="w-[200px] h-[45px]">
        <ButtonOpenModal text="Crear producto" />
    </div>
</div>

{#if form}
    <FormProduct isEdit={false} />
{/if}