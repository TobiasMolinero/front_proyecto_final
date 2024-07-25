<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    import { createForm, http } from '@controlers'
    import { gral_routes } from '@routes';
    import { Loader, InputLetra, InputLibre, InputNumero, ButtonForm } from '@lib';
    import { customerSchema } from '../schemas/schemas';
    import { customerValidator } from '../validators/validators';
    import { setUpdateCustomers } from '../store';
    import { createCustomer, editCustomer } from '../helpers';
    import type { DataCustomer } from '../interfaces';

    export let id: number = 0;
    export let isEdit: boolean = false;

    let isLoading: boolean = true;

    const dispatch = createEventDispatcher();

    const {form, errors, handleSubmit} = createForm({
        initialValues: customerSchema,
        validationSchema: customerValidator,
        onSubmit: (data: DataCustomer) => {
            if(isEdit){
                editCustomer(id, data).then(() => {
                    setUpdateCustomers();
                    dispatch('closeform', {id: 0});
                })
            } else {
                createCustomer(data).then(() => {
                    setUpdateCustomers();
                    dispatch('closeform');
                })
            }
        }
    })

    onMount(() => {
        if(id > 0){
            http.get(`${gral_routes.one_customer + id}`).then(response => {
                $form.nombre = response.data[0].nombre;
                $form.apellido = response.data[0].apellido;
                $form.nro_documento = String(response.data[0].nro_documento);
                $form.razon_social = response.data[0].razon_social;
                $form.domicilio = response.data[0].domicilio;
                $form.correo = response.data[0].correo;
                $form.telefono = response.data[0].telefono;
                isLoading = false;
            })
        } else {
            isLoading = false;
        }
    })

</script>


<div transition:fade={{duration: 150}} class="background-form">
    <div class="container-form">
        <h2>{isEdit ? 'Editar cliente' : 'Nuevo cliente'}</h2>
        <form on:submit|preventDefault={handleSubmit} class="form">
            {#if isLoading}
                <div style="display: flex; justify-content: center;">
                    <Loader />
                </div>
            {:else}                
                <div class="form-inputs">
                    <InputLetra id="inputNombre" label="Nombre*" bind:value={$form.nombre} error={$errors.nombre ? true : false} />
                    <InputLetra id="inputApellido" label="Apellido" bind:value={$form.apellido} error={$errors.apellido ? true : false} />
                    <InputNumero id="inputNroDocumento" min={0} max={12} label="Nro. Documento" bind:value={$form.nro_documento} error={$errors.nro_documento ? true : false} />
                    <InputLetra id="inputRazonSocial" label="Razón social" bind:value={$form.razon_social} error={$errors.razon_social ? true : false} />
                    <InputLibre id="inputDomicilio" label="Dirección" type="text" bind:value={$form.domicilio} error={$errors.domicilio ? true : false} />
                    <InputLibre id="inputCorreo" label="Correo" type="text" bind:value={$form.correo} error={$errors.correo ? true : false} />
                    <InputNumero id="inputTelefono" label="Telefono" min={10} max={10} bind:value={$form.telefono} error={$errors.telefono ? true : false} />
                </div>
            {/if}
            <div class="form-footer">
                {#if $errors.nombre} 
                    <p>Debe completar los campos obligatorios.</p>
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
        font-weight: 600;
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