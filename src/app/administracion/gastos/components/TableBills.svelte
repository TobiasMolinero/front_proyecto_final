<script lang="ts">
    import { onMount, afterUpdate } from 'svelte';
    import { http } from '@controlers';
    import { gral_routes } from '@routes';
    import { ButtonTable, Loader } from '@lib';
    import { loading, warning } from '@utils-alerts';
    import type { EventButtonEdit } from '@utils-interfaces';
    import { storeBills, totalByMonth } from '../store';
    import FormBills from './FormBills.svelte';
    import { calculateTotalByMonth, deleteBill, filterBillsByMonth } from '../helpers';
    import type { Bill } from '../interfaces';
    
    export let updateBills: boolean;
    export let valueMonth: string;

    let previousUpdateValue: boolean;
    let isLoading: boolean = true;
    let form: boolean = false;
    let id_bill: number; 
    let bills: Bill[];

    const getBills = () => {
        http.get(gral_routes.get_bills).then(response => {
            bills = response.data;
            $storeBills = bills
            isLoading = false;
        })
    }

    const openCloseForm = (e: EventButtonEdit) => {
        id_bill = e.detail.id;
        form ? form = false : form = true;
    }

    const selectBill = (id: number) => {  
        warning.fire({
            text: 'ATENCIÓN: ¿Seguro que desea dar de baja este registro? Esta acción es irreversible.'
        })
        .then((response) => {
            if(response.isConfirmed){
                loading.fire()
                deleteBill(id).then(() => {
                    getBills()
                })
            }
        })
    }

    onMount(() => {
        previousUpdateValue = updateBills;
        if($storeBills.length === 0){
            getBills();
        } else {
            isLoading = false;
        }
    })

    afterUpdate(() => {
        if(updateBills !== previousUpdateValue){
            getBills();
            previousUpdateValue = updateBills;
        }
    })

    $: {
        bills = filterBillsByMonth(valueMonth, $storeBills); 
        $totalByMonth = calculateTotalByMonth(bills); 
    }
</script>

<div class="grow mt-[10px]">
    <div class="container-table max-w-[100%] max-h-[385px] border-t-2 border-slate-800 grid place-start overflow-y-auto">
        <table class="relative border-collapse text-center w-full">
            <thead class="sticky top-0 bg-white shadow-[-4px_1px_1px_1px_#0f172a] z-[2]">
                <tr class="*:p-[10px_20px] *pb-[50px] *:text-neutral-700">
                    <th>Fecha</th>
                    <th>Detalle</th>
                    <th>Categoría</th>
                    <th>importe</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody class="divide-y">
                {#if isLoading}
                    <tr>
                        <td colspan="7" class="p-[15px]">
                            <Loader />
                        </td>
                    </tr>
                {:else if $storeBills}
                    {#each $storeBills as bill}
                        <tr class="*:p-[10px] hover:bg-neutral-200">
                            <td>{bill.fecha.substring(0, 10)}</td>
                            <td>{bill.detalle}</td>
                            <td>{bill.categoria}</td>
                            <td>$ {bill.importe}</td>
                            <td class="flex justify-center items-center gap-x-[5px]">
                                <ButtonTable id={bill.id_gasto} title='Editar gasto' className="edit" on:openform={openCloseForm}/> 
                                <ButtonTable id={bill.id_gasto} title='Eliminar gasto' className="delete" on:delete={() => selectBill(bill.id_gasto)}/> 
                            </td>
                        </tr>
                    {:else}
                        <tr>
                            <td colspan="6" class="p-[15px] font-[600] text-[24px]">
                                <h3>No se encontraron resultados</h3>
                            </td>
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    </div>
</div>

{#if form}
    <FormBills id={id_bill} isEdit={true} on:closeform={openCloseForm} on:getbills={getBills} />
{/if}


<style>
    .container-table{
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
    }
</style>
