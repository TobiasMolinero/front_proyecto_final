<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let type: string;
    export let text: string;

    const dispatch = createEventDispatcher();

    const closeForm = () => {
        dispatch('closeform', {
            user_id: 0
        });
    }
</script>

{#if type === 'button'}
    <button type="button" class="font-[500] w-full h-[45px] rounded-[10px] border border-[var(--dark-blue)] bg-white text-[var(--text-black) cursor-pointer hover:bg-[#e0e0e0] active:bg-white"  on:click={closeForm}>{text}</button>
{:else if type === "submit"}
    <button type="submit" class="font-[500] w-full h-[45px] rounded-[10px] border border-slate-800 bg-slate-800 text-[#fff] cursor-pointer hover:bg-slate-600 active:bg-slate-700">{text}</button>
{/if}
