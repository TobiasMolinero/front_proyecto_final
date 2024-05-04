<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    import { createForm, http } from '@controlers';
    import { InputLibre, ButtonForm } from '@lib';
    import { passwordSchema } from '../schemas/schemas';
    import { passwordValidator } from '../validators/validators';
    import { setUpdateUsers } from '../store';

    export let id: number = 0;

    const dispatch = createEventDispatcher();

    const {form, errors, handleSubmit} = createForm({
        initialValues: passwordSchema,
        validationSchema: passwordValidator,
        onSubmit: data => {
            const nueva_contraseña = data.contraseña;
            http.put(`/usuarios/editpassword/${id}`, {nueva_contraseña})
            .then(() => {
                setUpdateUsers();
                dispatch('closeform', {user_id: 0});
            })
        }
    })
</script>


<div transition:fade={{duration: 150}} class="background-form">
    <div class="container-form">
        <h2>Editar contraseña</h2>
        <form on:submit|preventDefault={handleSubmit} class="form">
            <h5>Ingrese la nueva contraseña</h5>
                <div class="form-inputs">
                    <InputLibre id="inputContraseña" label="Nueva contraseña*" type="text" bind:value={$form.contraseña} error={$errors.contraseña ? true : false} />
                </div>
            <div class="form-footer">
                {#if $errors.contraseña}
                    <p>La contraseña debe tener 6 caract. minimos, una mayuscula, un número y un caracter especial.</p>
                {/if}
                <div class="form-buttons">
                    <ButtonForm type="button" text="Cancelar" on:closeform />
                    <ButtonForm type="submit" text="Continuar" />
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
    gap: 10px;
    padding: 0 30px;
}

.form-inputs{
    display: flex;
    flex-direction: column;
    height: 100px;
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