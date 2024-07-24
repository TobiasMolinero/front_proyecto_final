<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { fade } from 'svelte/transition';
    import { createForm, http } from '@controlers';
    import { gral_routes } from "@routes";
    import { categoryBillSchema } from "../schemas";
    import { categoryBillValidator } from "../validators";
    import { InputLetra, ButtonForm } from "@lib";

    const dispatch = createEventDispatcher();

    const {form, errors, handleSubmit} = createForm({
        initialValues: categoryBillSchema,
        validationSchema: categoryBillValidator,
        onSubmit: data => {
            http.post(gral_routes.create_category_bills, data).then(() => {
                dispatch('closeform')
                dispatch('getcategories');
            })
        }
    })

</script>

<div transition:fade={{duration: 150}} class="background-form">
    <div class="container-form">
        <h2>Crear categoria</h2>
        <form on:submit|preventDefault={handleSubmit} class="form">
            <div class="form-inputs">
                <InputLetra id="txtNombreCategoria" label="Nombre categoria" bind:value={$form.categoria} error={$errors.categoria ? true : false} />
            </div>
            <div class="form-footer">
                {#if $errors.categoria} 
                  <p>Debe completar todos los campos obligatorios.</p>
                {/if}
                <div class="form-buttons">
                    <ButtonForm type="button" text="Cancelar" on:closeform />
                    <ButtonForm type="submit" text='Crear' />
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