<script lang="ts">
  import { createEventDispatcher } from 'svelte';
    import lupa from '../../assets/iconos/lupa.svg';

    export let placeholder: string;

    const dispatch = createEventDispatcher();
    let valueFilter: string;

    const sendValueFilter = () => {
        dispatch('sendvalue', {
            value: valueFilter
        })
    }

</script>

<div class="relative w-full h-full p-[2px] border-[2px] border-[var(--dark-blue)] rounded-[20px]">
    <input type="text" placeholder={placeholder} bind:value={valueFilter} on:input={sendValueFilter} class="w-full h-full border-none rounded-[20px] p-[10px] focus-visible:outline-none"/>
    <img src={lupa} alt="Icono de lupa" class="w-[30px] h-[30px] absolute top-[50%] right-[10px] translate-y-[-50%]">
</div>
