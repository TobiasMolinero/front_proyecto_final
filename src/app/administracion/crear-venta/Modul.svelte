<script lang="ts">
  import { push } from "svelte-spa-router";



</script>

<div class="flex flex-col h-[100%]">
    <button on:click={() => push('/Administracion/Ventas')} title="Volver a ventas" class="text-[14px] mx-[20px] pt-[10px] place-self-start underline cursor-pointer hover:text-slate-950">Volver a ventas</button>
    <h2 class="font-[700] text-[24px] text-start px-[20px]">Nueva Venta</h2>
</div>