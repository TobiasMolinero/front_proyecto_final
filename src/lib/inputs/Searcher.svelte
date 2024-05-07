<script lang="ts">
    import lupa from '../../assets/iconos/lupa.svg';
    export let placeholder: string;
</script>

<div class="input">
    <input type="text" placeholder={placeholder}>
    <img src={lupa} alt="Icono de lupa">
</div>

<style>
    .input{
        position: relative;
        width: 100%;
        height: 100%;
        padding: 2px;
        border: 2px solid var(--dark-blue);
        border-radius: 20px;
    }

    input{
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 20px;
        padding: 10px;
    }
    input:focus-visible{
        outline: none;
    }

    img{
        width: 30px;
        height: 30px;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
</style>