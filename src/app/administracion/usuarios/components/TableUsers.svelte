<script lang="ts">
    import { Loader, ButtonTable } from '@lib';
    import FormUser from './FormUser.svelte';
    import FormPassword from './FormPassword.svelte';
    import { http } from '@controlers';
    import { question } from '@utils-alerts';
    import { updateUsers } from '../store';
    import { admin_routes } from '@routes';
    import type { EventButtonEdit } from '@utils-interfaces';

    let users: any;
    let isLoading: boolean = true;
    let form: boolean = false;
    let formPassword: boolean = false;
    let id: number;

    const openCloseForm = (e: EventButtonEdit) => {
        id = e.detail.id;
        form ? form = false : form = true;
    }

    const openCloseFormPassword = (e: EventButtonEdit) => {
        id = e.detail.id;
        formPassword ? formPassword = false : formPassword = true;
    }

    const getUsers = () => {
        isLoading = true;
        http.get(admin_routes.users_list)
        .then(results => {
            users = results.data;
            isLoading = false;
        })
    }

    updateUsers.subscribe(() => {
        getUsers();
    })

    const deleteUser = (id: number, id_persona: number) => {
        question.fire({
            text: 'Seguro que desea dar de baja este usuario? Esta acción es irreversible.'
        })
        .then(results => {
            if(results.isConfirmed){
                http.put(`${admin_routes.delete_user + id}`, {id_persona})
                .then(() => {
                    getUsers();
                })
            }
        })
    }

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
                                    <ButtonTable className="edit" title="Editar usuario" id={user.id_usuario} on:openform={openCloseForm}/>
                                    <ButtonTable className="delete" title="Eliminar usuario" id={user.id_usuario} on:delete={() => deleteUser(user.id_usuario, user.id_persona)}/>
                                    <ButtonTable className="edit-password" title="Editar contraseña" id={user.id_usuario} on:openform={openCloseFormPassword}/>
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

{#if form}
    <FormUser id={id} isEdit={true} on:closeform={openCloseForm}/>
{/if}

{#if formPassword}
    <FormPassword id={id} on:closeform={openCloseFormPassword} />
{/if}

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

    tbody tr:hover{
        background: rgb(240, 240, 240);
    }

    .actions{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
</style>