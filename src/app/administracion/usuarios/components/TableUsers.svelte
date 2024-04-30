<script lang="ts">
    import { Loader, ButtonTable } from '@lib';
    import { getUsers } from '../helpers/helpers';
    import iconEdit from '../../../../assets/iconos/editar.svg';
    import iconDelete from '../../../../assets/iconos/borrar.svg';

    let users: any = getUsers();

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
                {#await users}
                    <tr>
                        <td colspan="7">
                            <Loader />
                        </td>
                    </tr>
                {:then users} 
                        {#each users as user, index}
                            <tr>
                                <td>{user.nombre}</td>
                                <td>{user.apellido}</td>
                                <td>{user.correo}</td>
                                <td>{user.telefono}</td>
                                <td>{user.usuario}</td>
                                <td>{user.rol}</td>
                                <td class="actions">
                                    <ButtonTable className="edit" src={iconEdit} title="Editar usuario"/>
                                    <ButtonTable className="delete" src={iconDelete} title="Eliminar usuario"/>
                                </td>
                            </tr>
                        {:else}
                            <tr>
                                <td colspan="7">
                                    <h2>No se encontraón resultados</h2>
                                </td>
                            </tr>
                        {/each}
                {:catch}
                    <tr>
                        <td colspan="7">
                            <h2>No se encontraron resultados</h2>
                        </td>
                    </tr>              
                {/await }
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