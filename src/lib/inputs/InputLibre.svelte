<script lang="ts">
    import eye from '../../assets/iconos/eye.svg';
    import eye_hidden from '../../assets/iconos/eye-hidden.svg';
    
    export let label: string;
    export let value: string;
    export let type: string;
    export let id: string;
    export let error: boolean = false;

    let passwordVisible: boolean = false;

    const showHiddenPassword = () => {
        passwordVisible ? passwordVisible = false : passwordVisible = true;
    }
</script>

{#if type === 'text'}
    <div class="input {error ? 'error' : ''}">
        <label for={id}>{label}</label>
        <input id={id} type="text" bind:value>
    </div>
{:else if type === 'password'}
    <div class="input {error ? 'error' : ''}">
        <label for={id}>{label}</label>
        {#if passwordVisible}
            <input id={id} type="text" bind:value>
            <button on:click={showHiddenPassword}>
                <img src={eye} alt="ver/ocultar contraseña" >
            </button>
        {:else}
            <input id={id} type="password" bind:value>
            <button on:click={showHiddenPassword}>
                <img src={eye_hidden} alt="ver/ocultar contraseña" >
            </button>
        {/if}
    </div>
{/if}

<style>
    .input{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .input > input{
        height: 35px;
        border-radius: 10px;
        border: 1px solid #00000050;
        padding-left: 10px;
    }
    .input > input:focus-visible{
        outline: 1px solid var(--dark-blue);
    }
    .input > button{
        position: absolute;
        background-color: transparent;
        border: none;
        right: 10px;
        bottom: 4px;
    }
    .input img{
        cursor: pointer;
        width: 20px;
    }


    .error > label{
        color: red;
    }
    .error > input{
        border: 1px solid red;
    }
    .error > input:focus-visible{
        outline: none;
    }
</style>