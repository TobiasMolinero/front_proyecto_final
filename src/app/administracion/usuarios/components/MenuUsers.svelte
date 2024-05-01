<script lang="ts">
    import { ButtonOpenModal, FormUser} from "@lib";

    let form: boolean = false;

    const openCloseForm = () => {
        form ? form = false : form = true;
    }
</script>

<div class="menu-users">
    <div class="container-button">
        <ButtonOpenModal text="Crear Usuario" on:openform={openCloseForm}/>
    </div>
</div>

{#if form}
    <FormUser on:closeform={openCloseForm}/>
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