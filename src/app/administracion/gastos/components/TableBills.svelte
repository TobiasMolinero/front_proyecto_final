<script lang="ts">
    import { onMount, afterUpdate } from 'svelte';
    import { http } from '@controlers';
    import { gral_routes } from '@routes';
    import { ButtonTable, Loader } from '@lib';
    import { question } from '@utils-alerts';
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
        question.fire({
            text: '¿Seguro que desea dar de baja este registro? Esta acción es irreversible.'
        })
        .then((response) => {
            if(response.isConfirmed){
                deleteBill(id).then(() => {
                    getBills()
                })
            }
        })
    }

    onMount(() => {
        previousUpdateValue = updateBills;
        if($storeBills[0].id_gasto === 0){
            getBills();
        } else {
            bills = $storeBills;
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

<div class="section-table">
    <div class="container-table">
        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Detalle</th>
                    <th>Categoría</th>
                    <th>importe</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {#if isLoading}
                    <tr>
                        <td colspan="7">
                            <Loader />
                        </td>
                    </tr>
                {:else if bills}
                    {#each bills as bill}
                        <tr>
                            <td>{bill.fecha.substring(0, 10)}</td>
                            <td>{bill.detalle}</td>
                            <td>{bill.categoria}</td>
                            <td>$ {bill.importe}</td>
                            <td class="actions">
                                <ButtonTable id={bill.id_gasto} title='Editar gasto' className="edit" on:openform={openCloseForm}/> 
                                <ButtonTable id={bill.id_gasto} title='Eliminar gasto' className="delete" on:delete={() => selectBill(bill.id_gasto)}/> 
                            </td>
                        </tr>
                    {:else}
                        <tr>
                            <td colspan="6">
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
    .section-table{
        flex: 1;
        padding: 20px;
    }

    .container-table{
        max-width: 100%;
        max-height: 385px;
        display: grid;
        place-items: start;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
        border: 1px solid var(--dark-blue);
    }

    table{
        background: white;
        text-align: center;
        border-collapse: collapse;
        width: 100%;
    }

    thead{
        background: var(--dark-blue);
        height: 50px;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 2;
    }

    thead th{
        color: white;
    }

    tbody tr td{
        padding: 15px
    }
    
    tbody tr:hover{
        background: rgb(240, 240, 240);
    }

    .actions{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
</style>
