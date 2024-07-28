<script lang="ts">
  import { createEventDispatcher } from "svelte";

    export let text: string;
    export let disabled: boolean = false;

    const dispatch = createEventDispatcher();

    const openForm = () => {
        dispatch('openform');
    }

</script>

<button disabled={disabled} on:click={openForm} class="h-full w-full bg-slate-800 rounded-[10px] text-[16px] font-[500] text-[#fff] cursor-pointer shadow-[2px_2px_5px_#00000050] hover:bg-slate-600 active:bg-slate-800 active:shadow-[inset_2px_2px_5px_#ffffff50]">{text}</button>
