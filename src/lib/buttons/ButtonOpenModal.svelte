<script lang="ts">
  import { createEventDispatcher } from "svelte";

    export let text: string;
    export let disabled: boolean = false;

    const dispatch = createEventDispatcher();

    const openForm = () => {
        dispatch('openform');
    }

</script>

<button disabled={disabled} on:click={openForm}>{text}</button>

<style>
    button{
        height: 100%;
        width: 100%;
        border: none;
        background: var(--dark-blue);
        border-radius: 10px;
        font-size: 16px;
        font-weight: 500;
        color: aliceblue;
        cursor: pointer;
        box-shadow: 2px 2px 5px #00000050;
    }
    button:hover{
        background: var(--regular-blue);
    }
    button:active{
        background: var(--dark-blue);
        box-shadow: inset 2px 2px 5px #ffffff50;
    }
</style>