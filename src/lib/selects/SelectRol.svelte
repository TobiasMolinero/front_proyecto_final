<script lang="ts">
    export let id: string;
    export let label: string;
    export let error: boolean = false;
    export let value: string = "selected";
</script>

<div class="select {error ? 'error' : '' }">
    <label for={id}>{label}</label>
    <select id={id} bind:value>
        <option value="1">Admin</option>
        <option value="2">Empleado</option>
    </select>
</div>

<style>

    .select{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    select{
        width: 100%;
        height: 35px;
        border-radius: 10px;
        border: 1px solid #00000050;
        padding: 0 10px;
        cursor: pointer;
    }

    select:focus-visible{
        outline: 1px solid var(--dark-blue);
    }

    .error > label{
        color: red;
    }
    .error > select{
        border: 1px solid red;
    }
    .error > select:focus-visible{
        outline: none;
    }
</style>