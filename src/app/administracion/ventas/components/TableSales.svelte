<script lang="ts">
    import { ButtonTable } from "@lib";
</script>

<div class="grow mt-[10px]">
    <div class="container-table max-w-[100%] max-h-[385px] border-t-2 border-slate-800 grid place-start overflow-y-auto">
        <table class="relative border-collapse text-center w-full">
            <thead class="sticky top-0 bg-white shadow-[-4px_1px_1px_1px_#0f172a] z-[2]">
                <tr class="*:p-[10px_20px] *pb-[50px] *:text-neutral-700">
                    <th>Nro. Factura</th>
                    <th>Fecha</th>
                    <th>Cliente</th>
                    <th>Tipo factura</th>
                    <th>Metodo de pago</th>
                    <th>Estado venta</th>
                    <!-- <th>Observaciones</th> -->
                    <th>Importe total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="divide-y">

                <!-- <tr>
                    <td colspan="8" class="p-[15px]">
                        <Loader />
                    </td>
                </tr> -->

                <tr class="*:p-[10px] hover:bg-neutral-200">
                    <td>asd</td>
                    <td>adasdas</td>
                    <td>adasdas</td>
                    <td>adasdas</td>
                    <td>adasdas</td>
                    <td>adasdas</td>
                    <td>adasdas</td>
                    <td class="flex justify-center items-center gap-x-[5px]">
                        <ButtonTable className="edit" title="Editar usuario" id={0} on:openform />
                        <ButtonTable className="delete" title="Eliminar usuario" id={0} on:delete />
                    </td>
                    <!-- <td>adasdas</td> -->
                </tr>

                <!-- <tr>
                    <td colspan="8" class="p-[15px] font-[600] text-[24px]">
                        <h3>No se encontraron resultados</h3>
                    </td>
                </tr> -->
            </tbody>
        </table>
    </div>
</div>

<style>
    .container-table{
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
    }
</style>