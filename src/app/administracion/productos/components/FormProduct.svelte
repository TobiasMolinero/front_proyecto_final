<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { Loader, InputLetra, InputLibre, InputMoneda, SelectCategoryProduct, ButtonForm } from '@lib'; 
    import { createForm } from '@controlers';
    import { gral_routes } from '@routes';
    import { productSchema } from '../schemas';
    import { productValidator } from '../validators';
    import { createProduct, editProduct, getOneProduct, parseProductData } from '../helpers';
    import type { DataProduct, Product } from '../interfaces';
    import { setUpdateProducts } from '../store';
    import FormCategoryProduct from './FormCategoryProduct.svelte';

    export let id: number = 0;
    export let isEdit: boolean;

    let isLoading: boolean = false;
    let formCategory: boolean = false

    const dispatch = createEventDispatcher();

    const {form, errors, handleSubmit} = createForm({
        initialValues: productSchema,
        validationSchema: productValidator,
        onSubmit: (data: DataProduct) => {
            const dataProduct: Product = parseProductData(data)
            if(isEdit){
                editProduct(id, dataProduct).then(() => {
                    setUpdateProducts();
                    dispatch('closeform', {id: 0})
                })
            } else {
                createProduct(dataProduct).then(() => {
                    setUpdateProducts();
                    dispatch('closeform');
                })
            }
        }
    })
    
    const openCloseFormCategory = () => {
        formCategory = formCategory ? false : true;
    }

    onMount(() => {
        if(isEdit){
            getOneProduct(id).then((response) => {
                $form.cod_producto = response.data[0].cod_producto,
                $form.nombre_producto = response.data[0].nombre_producto,
                $form.categoria = `${response.data[0].id_categoria_producto}`,
                $form.descripcion = response.data[0].descripcion,
                $form.precio = response.data[0].precio,
                isLoading = false;
            })
        } else {
            isLoading = false;
        }
    })
</script>

<div transition:fade={{duration: 150}} class="background-form">
    <div class="container-form">
        <h2>{isEdit ? 'Editar producto' : 'Crear producto'}</h2>
        <form on:submit|preventDefault={handleSubmit} class="form">
            {#if isLoading}
                <Loader />
            {:else}                
                <div class="form-inputs">
                    <InputLibre id="inputCodProducto" label="Codigo" type="text" bind:value={$form.cod_producto} error={$errors.cod_producto ? true : false}/>
                    <InputLetra id="inputNombreProducto" label="Nombre producto" bind:value={$form.nombre_producto} error={$errors.nombre_producto ? true : false}/>
                    <InputLibre id="inputDescripcion" type="text" label="Descripcion(Opcional)" bind:value={$form.descripcion} error={$errors.descripcion ? true : false}/>
                    <div class="flex items-end gap-x-[5px]">
                        <SelectCategoryProduct id="cboCategoriaProducto" label="Categoria" bind:value={$form.categoria} route={gral_routes.get_categories} error={$errors.categoria ? true : false}/>
                        <button on:click={openCloseFormCategory} type="button" class="flex justify-center items-center bg-[var(--dark-blue)] text-[#fff] text-[18px] w-[40px] h-[35px] rounded-[10px] cursor-pointer hover:bg-[var(--regular-blue)] active:bg-[var(--dark-blue)]" title="Agregar categoría">+</button>
                    </div>
                    <InputMoneda id="inputPrecio" label="Precio" bind:value={$form.precio} error={$errors.precio ? true : false}/>
                </div>
            {/if}
            <div class="form-footer">
                {#if $errors.cod_producto || $errors.nombre_producto || $errors.categoria || $errors.precio} 
                  <p>Debe completar todos los campos obligatorios.</p>
                {/if}
                <div class="form-buttons">
                    <ButtonForm type="button" text="Cancelar" on:closeform/>
                    <ButtonForm type="submit" text={isEdit ? 'Editar' : 'Crear'} />
                </div>
            </div>
        </form>
    </div>
</div>

{#if formCategory}
    <FormCategoryProduct isEdit={false} on:closeform={openCloseFormCategory} />
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
