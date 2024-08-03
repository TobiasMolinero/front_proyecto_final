<script lang="ts">
    import { ButtonOpenModal } from "@lib";
    import FormInventory from "./FormInventory.svelte";
    import { showForm } from "../store";

</script>

<div class="p-[10px_20px] flex justify-end mt-[5px]">
    <div class="w-[200px] h-[45px]">
        <ButtonOpenModal text="Registrar ingreso" on:openform={() => $showForm = true} />
    </div>
</div>

{#if $showForm}
    <FormInventory />
{/if}