<script lang="ts">
    export let month: string

    let totalBills: number = 10000
</script>

<div class="border rounded-md p-6 shadow">
    <h3>Tus gastos de {month}</h3>
    <span class="font-[700] text-[26px] text-red-600">$ 
        <span class="text-[38px] text-red-600">{totalBills}</span>
        
    </span>
</div>