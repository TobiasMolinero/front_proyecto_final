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

<div class="input {error ? 'error' : ''}">
    <label for={id}>{label}</label>
    <input id={id} type="text" minlength={min} maxlength={max} bind:value>
</div>

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