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
    <div class="relative flex flex-col gap-[5px]">
        <label for={id} class={`${error ? 'text-[red]' : ''}`}>{label}</label>
        <input id={id} type="text" bind:value autocomplete="off" class={`h-[35px] rounded-[10px] border pl-[10px] ${error ? 'border-[red] focus-visible:outline-none' : 'border-[#00000050] focus-visible:outline-[1px_solid_var(--dark-blue)]'}`}>
    </div>
{:else if type === 'password'}
    <div class="relative flex flex-col gap-[5px]">
        <label for={id} class={`${error ? 'text-[red]' : ''}`}>{label}</label>
        {#if passwordVisible}
            <input id={id} type="text" bind:value autocomplete="off" class={`h-[35px] rounded-[10px] border pl-[10px] ${error ? 'border-[red] focus-visible:outline-none' : 'border-[#00000050] focus-visible:outline-[1px_solid_var(--dark-blue)]'}`}>
            <button type="button" on:click={showHiddenPassword} class="absolute bottom-[7px] right-2">
                <img src={eye} alt="ver/ocultar contraseña" class="h-[20px]">
            </button>
        {:else}
            <input id={id} type="password" bind:value autocomplete="off" class={`h-[35px] rounded-[10px] border pl-[10px] ${error ? 'border-[red] focus-visible:outline-none' : 'border-[#00000050] focus-visible:outline-[1px_solid_var(--dark-blue)]'}`}>
            <button type="button" on:click={showHiddenPassword} class="absolute bottom-[7px] right-2">
                <img src={eye_hidden} alt="ver/ocultar contraseña" class="h-[20px]">
            </button>
        {/if}
    </div>
{:else if type="email"}
    <div class="relative flex flex-col gap-[5px]">
        <label for={id} class={`${error ? 'text-[red]' : ''}`}>{label}</label>
        <input id={id} type="email" bind:value required autocomplete="off" class={`h-[35px] rounded-[10px] border pl-[10px] ${error ? 'border-[red] focus-visible:outline-none' : 'border-[#00000050] focus-visible:outline-[1px_solid_var(--dark-blue)]'}`}>
    </div>
{/if}
