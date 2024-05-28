<script lang="ts">
    import { mascaraDni } from "./helpers";

    export let label: string;
    export let id: string; 
    export let min: number;
    export let max: number;
    export let value: string;
    export let error: boolean;
    export let formato: string = 'default';

    $: switch (formato) {
        case 'dni':
            value = mascaraDni(value);
            break;
        default:
            value = value.replace(/[^0-9]/g, '');
            break;
    }
</script>

<div class="relative flex flex-col gap-[5px]">
    <label for={id} class={`${error ? 'text-[red]' : ''}`}>{label}</label>
    <input id={id} type="text" minlength={min} maxlength={max} bind:value autocomplete="off" class="{`h-[35px] rounded-[10px] border pl-[10px] ${error ? 'border-[red] focus-visible:outline-none' : 'border-[#00000050] focus-visible:outline-[1px_solid_var(--dark-blue)]'}`}">
</div>
