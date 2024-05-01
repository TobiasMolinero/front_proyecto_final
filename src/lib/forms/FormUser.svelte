<script lang="ts">
    import { fade } from 'svelte/transition';
    import { InputLibre, InputLetra, InputNumero, ButtonForm, SelectRol} from '@lib';
    import { createForm, http } from '@controlers';
    import { userSchema } from '../../app/administracion/usuarios/schemas/schemas';
    import { userValidator } from '../../app/administracion/usuarios/validators/validators';

    const { form, errors, handleSubmit } = createForm({
        initialValues: userSchema,
        validationSchema: userValidator,
        onSubmit: data => {
            console.log(data);
        }
    })

</script>

<div transition:fade={{duration: 150}} class="background-form">
    <div class="container-form">
        <h2>Crear usuario</h2>
        <form on:submit|preventDefault={handleSubmit} class="form">
            <div class="form-inputs">
                <InputLetra id="inputNombre" label="Nombre *" bind:value={$form.nombre} error={$errors.nombre ? true : false} />
                <InputLetra id="inputApellido" label="Apellido *" bind:value={$form.apellido} error={$errors.apellido ? true : false} />
                <InputLibre id="inputCorreo" label="Correo *" type="email" bind:value={$form.correo} error={$errors.correo ? true : false} />
                <InputNumero id="inputTelefono" label="Telefono*" min={10} max={10} bind:value={$form.telefono} error={$errors.telefono ? true : false} />
                <InputLibre id="inputUsuario" label="Usuario *" type="text" bind:value={$form.usuario} error={$errors.usuario ? true : false} />
                <SelectRol id="cboRol" label="Rol *" bind:value={$form.id_rol} error={$errors.id_rol ? true : false} />
                <InputLibre id="inputContraseña" label="Contraseña*" type="text" bind:value={$form.contraseña} error={$errors.contraseña ? true : false}/>
            </div>
            <div class="form-footer">
                {#if $errors.nombre || $errors.apellido || $errors.correo || $errors.telefono || $errors.usuario || $errors.id_rol} 
                    <p>Debe completar todos los campos.</p>
                {:else if $errors.contraseña}
                    <p>La contraseña debe tener 6 caract. minimos, una mayuscula, un número y un caracter especial.</p>
                {/if}
                <div class="form-buttons">
                    <ButtonForm type="button" text="Cancelar" on:closeform />
                    <ButtonForm type="submit" text="Crear" />
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
