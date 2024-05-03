<script lang="ts">
    import { onMount } from 'svelte';
    import { Loader, ButtonTable } from '@lib';
    import iconEdit from '../../../../assets/iconos/editar.svg';
    import iconDelete from '../../../../assets/iconos/borrar.svg';
    import { http } from '@controlers';
    import { question } from '@utils-alerts';

    let users: any;
    let isLoading: any = true;

    const getUsers = () => {
        http.get('/usuarios/listarusuarios')
        .then(results => {
            users = results.data;
            isLoading = false;
        })
    }

    const deleteUser = (id: number) => {
        console.log('hola')
        question.fire({
            text: 'Seguro que desea dar de baja este usuario? Esta acción es irreversible.'
        })
        .then(results => {
            if(results.isConfirmed){
                http.delete(`/usuarios/bajausuario/${id}`);
                getUsers();
            }
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
                {#if isLoading}
                    <tr>
                        <td colspan="7">
                            <Loader />
                        </td>
                    </tr>
                {:else if users} 
                        {#each users as user}
                            <tr>
                                <td>{user.nombre}</td>
                                <td>{user.apellido}</td>
                                <td>{user.correo}</td>
                                <td>{user.telefono}</td>
                                <td>{user.usuario}</td>
                                <td>{user.rol}</td>
                                <td class="actions">
                                    <ButtonTable className="edit" src={iconEdit} title="Editar usuario" on:openform/>
                                    <ButtonTable className="delete" src={iconDelete} title="Eliminar usuario" on:deleteuser={() => deleteUser(user.id_usuario)}/>
                                </td>
                            </tr>
                        {:else}
                            <tr>
                                <td colspan="7">
                                    <h3>No se encontraron resultados</h3>
                                </td>
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
        max-height: 385px;
        display: grid;
        place-items: start;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
        border: 1px solid var(--dark-blue);
    }

    table{
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
        left: 0;
        z-index: 2;
    }

    tbody tr td{
        padding: 15px
    }

    .actions{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
</style>