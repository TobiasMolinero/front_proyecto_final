<script lang="ts">
    import { Loader, ButtonTable } from '@lib';
    import FormUser from './FormUser.svelte';
    import FormPassword from './FormPassword.svelte';
    import { http } from '@controlers';
    import { loading, warning } from '@utils-alerts';
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
        warning.fire({
            text: 'ATENCIÓN: Seguro que desea dar de baja este usuario? Esta acción es irreversible.'
        })
        .then(results => {
            if(results.isConfirmed){
                loading.fire()
                http.put(`${admin_routes.delete_user + id}`, {id_persona})
                .then(() => {
                    getUsers();
                })
            }
        })
    }

</script>

<div class="grow mt-[10px]">
    <div class="container-table max-w-[100%] max-h-[385px] border-t-2 border-slate-800 grid place-start overflow-y-auto">
        <table class="relative border-collapse text-center w-full">
            <thead class="sticky top-0 bg-white shadow-[-4px_1px_1px_1px_#0f172a] z-[2]">
                <tr class="*:p-[10px_20px] *pb-[50px] *:text-neutral-700">
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Usuario</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody class="divide-y">
                {#if isLoading}
                    <tr>
                        <td colspan="7" class="p-[15px]">
                            <Loader />
                        </td>
                    </tr>
                {:else if users} 
                        {#each users as user}
                            <tr class="*:p-[10px] hover:bg-neutral-200">
                                <td>{user.nombre}</td>
                                <td>{user.apellido}</td>
                                <td>{user.correo}</td>
                                <td>{user.telefono}</td>
                                <td>{user.usuario}</td>
                                <td>{user.rol}</td>
                                <td class="flex justify-center items-center gap-x-[5px]">
                                    <ButtonTable className="edit" title="Editar usuario" id={user.id_usuario} on:openform={openCloseForm}/>
                                    <ButtonTable className="delete" title="Eliminar usuario" id={user.id_usuario} on:delete={() => deleteUser(user.id_usuario, user.id_persona)}/>
                                    <ButtonTable className="edit-password" title="Editar contraseña" id={user.id_usuario} on:openform={openCloseFormPassword}/>
                                </td>
                            </tr>
                        {:else}
                            <tr>
                                <td colspan="7" class="p-[15px] font-[600] text-[24px]">
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
    .container-table{
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
    }
</style>