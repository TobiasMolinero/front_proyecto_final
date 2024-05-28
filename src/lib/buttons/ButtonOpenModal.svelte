<script lang="ts">
  import { createEventDispatcher } from "svelte";

    export let text: string;
    export let disabled: boolean = false;

    const dispatch = createEventDispatcher();

    const openForm = () => {
        dispatch('openform');
    }

</script>

<button disabled={disabled} on:click={openForm} class="h-full w-full bg-[var(--dark-blue)] rounded-[10px] text-[16px] font-[500] text-[#fff] cursor-pointer shadow-[2px_2px_5px_#00000050] hover:bg-[var(--regular-blue)] active:bg-[var(--dark-blue)] active:shadow-[inset_2px_2px_5px_#ffffff50]">{text}</button>
