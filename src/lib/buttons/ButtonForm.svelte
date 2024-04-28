<script lang="ts">
    export let type: string;
    export let text: string;
</script>

{#if type === 'button'}
    <button type="button" class="button">{text}</button>
{:else if type === "submit"}
    <button type="submit" class="button-submit">{text}</button>
{/if}

<style>
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