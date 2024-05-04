<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { InputLibre, InputLetra, InputNumero, ButtonForm, SelectRol, Loader} from '@lib';
    import { createForm, http } from '@controlers';
    import { parsearDatosUsuario } from '../helpers/helpers';
    import { userSchema } from '../schemas/schemas';
    import { userValidator, userEditValidator } from '../validators/validators';
    import { setUpdateUsers } from '../store';

    export let id: number = 0;
    export let isEdit: boolean;

    let isLoading: boolean = true;

    const dispatch = createEventDispatcher();

    const { form, errors, handleSubmit } = createForm({
        initialValues: userSchema,
        validationSchema: isEdit ? userEditValidator : userValidator,
        onSubmit: data => {
            const datosUsuario = parsearDatosUsuario(data);
            console.log(datosUsuario)
            if(isEdit){
                http.put(`/usuarios/edit/${id}`, datosUsuario)
                .then(() => {
                    setUpdateUsers();
                    dispatch('closeform', {user_id: 0});
                })
            } else {
                http.post('/usuarios/altausuario', datosUsuario)
                .then(() => {
                    setUpdateUsers();
                    dispatch('closeform');
                })
            }
            
        }
    })

    onMount(() => {
        if(id > 0){
            http.get(`/usuarios/one/${id}`)
            .then(results => {
                $form.nombre = results.data[0].nombre;
                $form.apellido = results.data[0].apellido;
                $form.correo = results.data[0].correo;
                $form.telefono = results.data[0].telefono;
                $form.usuario = results.data[0].usuario;
                const rol = results.data[0].rol;
                if(rol === 'admin'){
                    $form.id_rol = "1";
                } else if(rol === 'empleado'){
                    $form.id_rol = "2"
                }
                isLoading = false;
            })
        } else {
            isLoading = false;
        }
    })

</script>

    <div transition:fade={{duration: 150}} class="background-form">
        <div class="container-form">
            <h2>{isEdit ? 'Editar usuario' : 'Crear usuario'}</h2>
            <form on:submit|preventDefault={handleSubmit} class="form">
                {#if isLoading}
                    <Loader />
                {:else}                
                    <div class="form-inputs">
                        <InputLetra id="inputNombre" label="Nombre *" bind:value={$form.nombre} error={$errors.nombre ? true : false} />
                        <InputLetra id="inputApellido" label="Apellido *" bind:value={$form.apellido} error={$errors.apellido ? true : false} />
                        <InputLibre id="inputCorreo" label="Correo *" type="email" bind:value={$form.correo} error={$errors.correo ? true : false} />
                        <InputNumero id="inputTelefono" label="Telefono*" min={10} max={10} bind:value={$form.telefono} error={$errors.telefono ? true : false} />
                        <InputLibre id="inputUsuario" label="Usuario *" type="text" bind:value={$form.usuario} error={$errors.usuario ? true : false} />
                        <SelectRol id="cboRol" label="Rol *" bind:value={$form.id_rol} error={$errors.id_rol ? true : false} />
                        {#if !isEdit}
                            <InputLibre id="inputContraseña" label="Contraseña*" type="text" bind:value={$form.contraseña} error={$errors.contraseña ? true : false} />
                        {/if}
                    </div>
                {/if}
                <div class="form-footer">
                    {#if $errors.nombre || $errors.apellido || $errors.correo || $errors.telefono || $errors.usuario || $errors.id_rol} 
                        <p>Debe completar todos los campos.</p>
                    {:else if $errors.contraseña}
                        <p>La contraseña debe tener 6 caract. minimos, una mayuscula, un número y un caracter especial.</p>
                    {/if}
                    <div class="form-buttons">
                        <ButtonForm type="button" text="Cancelar" on:closeform />
                        <ButtonForm type="submit" text={isEdit ? 'Editar' : 'Crear'} />
                    </div>
                </div>
            </form>
        </div>
    </div>

<style>
    .background-form{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #00000081;
        display: grid;
        place-items: center;
        z-index: 10;
    }

    .container-form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        background: rgb(230, 223, 223);
        width: 350px;
        height: fit-content;
        border-radius: 10px;
        box-shadow: 0 0 10px #0000008c;
        padding: 20px;
    }

    h2{
        text-align: center;
        padding: 10px 0;
    }

    .form{
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 0 30px;
    }

    .form-inputs{
        display: flex;
        flex-direction: column;
        height: 300px;
        overflow: auto;
        gap: 15px;
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
        padding: 5px 10px;
        border-top: 1px solid #8a8a8a;
        border-bottom: 1px solid #8a8a8a;
    }

    .form-footer{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .form-footer p{
        color: red;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
    }

    .form-buttons{
        display: flex;
        justify-content: center;
        gap: 10px;
    }
</style>
