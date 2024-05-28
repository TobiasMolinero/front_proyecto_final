<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import iconEdit from '../../assets/iconos/editar.svg';
    import iconDelete from '../../assets/iconos/borrar.svg';
    import iconEditPassword from '../../assets/iconos/cambiar-contraseña.svg'

    export let id: number;
    export let className: string;
    export let title: string;
    
    let src: string;

    const dispatch = createEventDispatcher();

    const openEditForm = () => {
        dispatch('openform', {
            id: id
        });
    }
    
    const deleteUser = () => {
        dispatch('delete');
    }

    onMount(() => {
        if(className === 'edit') src = iconEdit;
        if(className === 'delete') src = iconDelete;
        if(className === 'edit-password') src = iconEditPassword;
    })
    
</script>

<button class={className} title={title} on:click={openEditForm} on:click={deleteUser}>
    <img class="icon" src={src} alt="icono">
</button>

<style>
    .edit, .delete, .edit-password{
        position: relative;
        cursor: pointer;
        width: 30px;
        height: 30px;
        border: none;
        display: grid;
        place-items: center;
        box-shadow: 1px 1px 3px #00000050;
        border-radius: 5px;
    }

    .edit{
        background: rgb(212, 212, 0);
    }
    .edit:hover{
        background: rgb(241, 241, 0);
    }
    .edit:active{
        background: rgb(212, 212, 0);
    }

    .delete{
        background: rgb(200, 0, 0);
    }
    .delete:hover{
        background: rgb(228, 0, 0);
    }
    .delete:active{
        background: rgb(200, 0, 0);
    }

    .edit-password{
        background: rgb(136, 136, 136);
    }
    .edit-password:hover{
        background: rgb(155, 155, 155);
    }
    .edit-password:active{
        background: rgb(136, 136, 136);
    }

    .icon{
        width: 20px;
    }

    .title{
        white-space: none;
        position: absolute;
        left: -120px;
        background: white;
        box-shadow: 0px 0px 6px #00000050;
        border-radius: 10px;
        color: var(--text-black);
        width: 120px;
        padding: 5px 0;
    }
</style>