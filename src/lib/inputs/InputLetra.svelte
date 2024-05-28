<script lang="ts">
    export let label: string;
    export let id: string; 
    export let value: string;
    export let error: boolean;

    $: value = value.replace(/[^A-Za-z\s]/g, '');
</script>

<div class="relative flex flex-col gap-[5px]">
    <label for={id} class={`${error ? 'text-[red]' : ''}`}>{label}</label>
    <input id={id} type="text" bind:value autocomplete="off" class={`h-[35px] rounded-[10px] border pl-[10px] ${error ? 'border-[red] focus-visible:outline-none' : 'border-[#00000050] focus-visible:outline-[1px_solid_var(--dark-blue)]'}`}>
</div>
