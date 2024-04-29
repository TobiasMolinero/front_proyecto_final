<script lang="ts">
    import ButtonOpenModal from "../../../../lib/buttons/ButtonOpenModal.svelte";
</script>

<div class="menu-users">
    <div class="container-button">
        <ButtonOpenModal text="Crear Usuario"/>
    </div>
</div>

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