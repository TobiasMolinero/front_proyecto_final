<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { fade } from 'svelte/transition';
    import { createForm } from '@controlers';
    import { gral_routes } from "@routes";
    import { SelectCategoryBills, InputLetra, InputMoneda, InputFecha, Loader, ButtonForm } from "@lib"; 
    import { billSchema } from "../schemas";
    import { billValidator } from "../validators";
    import { createBill, editBill, getOneBill, parseBillData } from "../helpers";
    import type { DataBillToCreateEdit } from "../interfaces";
  import FormCategory from "./FormCategory.svelte";

    export let id: number = 0;
    export let isEdit: boolean = false;

    let isLoading: boolean = false;
    let formCategory: boolean = false;
    let updateCategories: boolean = false;

    const dispatch = createEventDispatcher();

    const {form, errors, handleSubmit} = createForm({
        initialValues: billSchema,
        validationSchema: billValidator,
        onSubmit: data => {
            const dataBill: DataBillToCreateEdit = parseBillData(data)
            if(isEdit){
                editBill(id, dataBill).then(() => {
                    dispatch('getbills');
                    dispatch('closeform', {id: 0})
                })
            } else {
                createBill(dataBill).then(() => {
                    dispatch('getbills');
                    dispatch('closeform')
                })
            }
        }
    })

    const openCloseFormCategory = () => {
        formCategory = formCategory ? false : true; 
    }

    const setUpdateCategories = () => {
        updateCategories = !updateCategories;
    }

    onMount(() => {
        if(isEdit){
            getOneBill(id).then((response) => {
                $form.detalle = response.data[0].detalle
                $form.categoria = `${response.data[0].id_categoria_gasto}`
                $form.fecha = response.data[0].fecha.substring(0, 10)
                $form.importe = response.data[0].importe
                isLoading = false
            })
        } else {
            isLoading = false
        }
    })
</script>

<div transition:fade={{duration: 150}} class="background-form">
    <div class="container-form">
        <h2>{isEdit ? 'Editar gasto' : 'Registrar gasto'}</h2>
        <form on:submit|preventDefault={handleSubmit} class="form">
            {#if isLoading}
                <Loader />
            {:else}                
                <div class="form-inputs">
                    <InputLetra id="inputDetalleGasto" label="Detalle" bind:value={$form.detalle} error={$errors.detalle ? true : false}/>
                    <div class="flex items-end gap-x-[5px]">
                        <SelectCategoryBills id="cboCategoriaGasto" label="Categoria" bind:value={$form.categoria} route={gral_routes.get_categories_bills} error={$errors.categoria ? true : false} updateCategories={updateCategories}/>
                        <button on:click={openCloseFormCategory} type="button" class="flex justify-center items-center bg-[var(--dark-blue)] text-[#fff] text-[18px] w-[40px] h-[35px] rounded-[10px] cursor-pointer hover:bg-[var(--regular-blue)] active:bg-[var(--dark-blue)]" title="Agregar categoría">+</button>
                    </div>
                    <InputFecha id='inputFecha' label="Fecha" bind:value={$form.fecha} error={$errors.fecha ? true : false}/>
                    <InputMoneda id="inputPrecio" label="Precio" bind:value={$form.importe} error={$errors.importe ? true : false}/>
                </div>
            {/if}
            <div class="form-footer">
                {#if $errors.detalle || $errors.categoria || $errors.fecha || $errors.importe} 
                  <p>Debe completar todos los campos obligatorios.</p>
                {/if}
                <div class="form-buttons">
                    <ButtonForm type="button" text="Cancelar" on:closeform />
                    <ButtonForm type="submit" text={isEdit ? 'Editar' : 'Crear'} />
                </div>
            </div>
        </form>
    </div>
</div>

{#if formCategory}
    <FormCategory on:getcategories={setUpdateCategories} on:closeform={openCloseFormCategory} />
{/if}

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