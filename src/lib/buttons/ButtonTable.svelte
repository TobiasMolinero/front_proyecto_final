<script lang="ts">
    import { fade } from 'svelte/transition' 

    // export let id: number;
    export let src: string;
    export let className: string;
    export let title: string;

    let showTitle: boolean;

    const showHiddenTitle = () => {
        showTitle ? showTitle = false : showTitle = true;
    }
</script>

<button class={className} on:mouseenter={showHiddenTitle} on:mouseleave={showHiddenTitle}>
    <img class="icon" src={src} alt="icono">
    {#if showTitle}
        <span transition:fade={{duration: 150}} class="title">{title}</span>
    {/if}
</button>

<style>
    .edit, .delete{
        position: relative;
        cursor: pointer;
        width: 30px;
        height: 30px;
        border: none;
        display: grid;
        place-items: center;
        box-shadow: 1px 1px 3px #00000050;
        border-radius: 5px;
    }

    .edit{
        background: rgb(212, 212, 0);
    }
    .edit:hover{
        background: rgb(241, 241, 0);
    }
    .edit:active{
        background: rgb(212, 212, 0);
    }

    .delete{
        background: rgb(200, 0, 0);
    }
    .delete:hover{
        background: rgb(228, 0, 0);
    }
    .delete:active{
        background: rgb(200, 0, 0);
    }

    .icon{
        width: 20px;
    }

    .title{
        white-space: none;
        position: absolute;
        bottom: -30px;
        background: white;
        box-shadow: 0px 0px 6px #00000050;
        border-radius: 10px;
        color: var(--text-black);
        width: 120px;
        padding: 5px 0;
    }
</style>