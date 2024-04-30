<script lang="ts">
    import { ButtonOpenModal, FormUser} from "@lib";

    let form: boolean = true;

    const closeForm = () => {
        form = false;
    }
</script>

<div class="menu-users">
    <div class="container-button">
        <ButtonOpenModal text="Crear Usuario"/>
    </div>
</div>

{#if form}
    <FormUser on:closeform={closeForm}/>
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