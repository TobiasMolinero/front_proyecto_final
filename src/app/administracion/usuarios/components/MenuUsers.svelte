<script lang="ts">
    import { ButtonOpenModal } from "@lib";
    import FormUser from "./FormUser.svelte";

    let form: boolean = false;

    const openCloseForm = () => {
        form ? form = false : form = true;
    }
    
</script>

<div class="menu-users mt-[5px]">
    <div class="container-button">
        <ButtonOpenModal text="Crear Usuario" on:openform={openCloseForm}/>
    </div>
</div>

{#if form}
    <FormUser isEdit={false} on:closeform={openCloseForm} />
{/if}

<style>
    .menu-users{
        padding: 10px 20px;
        display: flex;
        justify-content: end;
    }

    .container-button{
        width: 200px;
        height: 45px;
    }
</style>