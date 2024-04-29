<script lang="ts">
    import {onMount} from 'svelte';
  import { http } from '../../../../shared/request';

    let users: any;

    const getUsers = () => {
        http.get('/usuarios/listarusuarios').then((results) => {
            users = results.data;
        })
    }

    onMount(() => {
        getUsers();
    })
</script>

<div class="section-table">
    <div class="container-table">
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Usuario</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {#if users}
                    {#each users as user, index}
                        <tr>
                            <td>{user.nombre}</td>
                            <td>{user.apellido}</td>
                            <td>{user.correo}</td>
                            <td>{user.telefono}</td>
                            <td>{user.usuario}</td>
                            <td>{user.rol}</td>
                            <td><button>borrar</button></td>
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    </div>
</div>





<style>
    .section-table{
        flex: 1;
        padding: 20px;
    }

    .container-table{
        max-width: 100%;
        display: grid;
        place-items: start;
    }

    table{
        min-height: 100%;
        max-height: 385px;
        overflow: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
        border: 1px solid var(--dark-blue);
        background: white;
        text-align: center;
        border-collapse: collapse;
        width: 100%;
    }

    thead{
        background: var(--dark-blue);
        color: white;
        height: 50px;
        position: sticky;
        top: 0;
        left: 0
    }

    tbody tr{
        height: 50px;
    }
</style>