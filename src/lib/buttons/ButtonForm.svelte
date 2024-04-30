<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let type: string;
    export let text: string;

    const dispatch = createEventDispatcher();

    const closeForm = () => {
        dispatch('closeform');
    }
</script>

{#if type === 'button'}
    <button type="button" class="button" on:click={closeForm}>{text}</button>
{:else if type === "submit"}
    <button type="submit" class="button-submit">{text}</button>
{/if}

<style>

    .button{
        font-weight: 500;
        width: 100%;
        height: 45px;
        border-radius: 10px;
        border: 1px solid var(--dark-blue);
        background: white;
        color: var(--text-black);
        cursor: pointer;
    }

    .button-submit{
        font-weight: 500;
        width: 100%;
        height: 45px;
        border-radius: 10px;
        border: none;
        background: var(--dark-blue);
        color: #fff;
        cursor: pointer;
    }
    .button-submit:hover{
        background: var(--regular-blue);
    }
    .button-submit:active{
        background: var(--dark-blue);
    }
</style>