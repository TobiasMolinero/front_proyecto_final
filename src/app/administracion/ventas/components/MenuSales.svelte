<script lang="ts">
    import { SelectMonth, ButtonOpenModal } from '@lib'
    import { push } from 'svelte-spa-router'

    export let actualMonth: string

</script>

<div class="flex justify-between p-[10px_20px] mt-[5px]">
    <div class="w-[200px] flex items-center gap-x-[10px]">
        <SelectMonth value={actualMonth} on:sendmonth />
    </div>
    <div class="w-[200px] h-[45px]">
        <ButtonOpenModal text="Nueva venta" on:openform={() => push('/Administracion/RegistrarVenta')} />
    </div>
</div>

