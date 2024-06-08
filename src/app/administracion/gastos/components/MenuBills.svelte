<script lang="ts">
    import { ButtonOpenModal } from "@lib";
    import FormBills from "./FormBills.svelte";

    let form: boolean = false;

    const openCloseForm = () => {
        form = form ? false : true; 
    }
</script>

<div class="flex justify-end p-[10px_20px]">
    <div class="w-[200px] h-[45px]">
        <ButtonOpenModal text="Registrar gasto" on:openform={openCloseForm} />
    </div>
</div>

{#if form}
    <FormBills isEdit={false} on:closeform={openCloseForm} />
{/if}

