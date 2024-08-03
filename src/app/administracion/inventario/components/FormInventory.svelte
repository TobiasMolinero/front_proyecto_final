<script lang="ts">
    import { fade } from "svelte/transition";
    import { Loader, ButtonForm, SelectProduct, InputNumero } from "@lib";
    import { createForm } from "svelte-forms-lib";
    import { inventorySchema } from "../schemas";
    import { inventoryValidator } from "../validator";
    import { onMount } from "svelte";
    import { updateStock } from "../helpers";

    const {form, errors, handleSubmit} = createForm({
        initialValues: inventorySchema,
        validationSchema: inventoryValidator,
        onSubmit: data => {
            const {id_producto, cantidad} = data 
            updateStock(Number(id_producto), Number(cantidad))
        }
    })

    onMount(() => {
        $form.id_producto = "1";
    })
    
</script>

<div transition:fade={{duration: 150}} class="background-form">
    <div class="container-form">
        <h2>Ingresar mercadería</h2>
        <form on:submit|preventDefault={handleSubmit} class="form">   
            <div class="form-inputs">
                <SelectProduct id="selectProducts" label="Seleccione un producto" bind:value={$form.id_producto} error={$errors.id_producto ? true : false} />
                <InputNumero id="inputCantidad" label="Cantidad a ingresar" bind:value={$form.cantidad} min={0} max={5} error={$errors.cantidad ? true : false} />
            </div>
            <div class="form-footer">
                {#if $errors.cantidad || $errors.id_producto} 
                  <p>Debe completar todos los campos obligatorios.</p>
                {/if}
                <div class="form-buttons">
                    <ButtonForm type="button" text="Cancelar" on:closeform />
                    <ButtonForm type="submit" text="Registrar" />
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
        height: fit-content;
        overflow: auto;
        gap: 15px;
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
        padding: 10px;
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
