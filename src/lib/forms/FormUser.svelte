<script lang="ts">
    import { InputLibre, ButtonForm, SelectRol} from '@lib';
</script>

<div class="background-form">
    <div class="container-form">
        <h2>Crear usuario</h2>
        <form class="form">
            <div class="form-inputs">
                <InputLibre id="inputNombre" label="Nombre *" type="text" value="" error={false} />
                <InputLibre id="inputApellido" label="Apellido *" type="text" value="" error={false} />
                <InputLibre id="inputCorreo" label="Correo *" type="text" value="" error={false} />
                <InputLibre id="inputTelefono" label="Telefono*" type="text" value="" error={false} />
                <InputLibre id="inputUsuario" label="Usuario *" type="text" value="" error={false} />
                <SelectRol id="cboRol" label="Rol *"/>
                <InputLibre id="inputContraseña" label="Contraseña*" type="text" value="" error={false}/>
            </div>
            <div class="form-buttons">
                <ButtonForm type="button" text="Cancelar" on:closeform />
                <ButtonForm type="submit" text="Crear"/>
            </div>
        </form>
    </div>
</div>

<style>
    .background-form{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #00000081;
        display: grid;
        place-items: center;
        z-index: 10;
    }

    .container-form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        background: rgb(230, 223, 223);
        width: 350px;
        height: fit-content;
        border-radius: 10px;
        box-shadow: 0 0 10px #0000008c;
        padding: 20px;
    }

    h2{
        text-align: center;
        padding: 10px 0;
    }

    .form{
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 0 30px;
    }

    .form-inputs{
        display: flex;
        flex-direction: column;
        height: 300px;
        overflow: auto;
        gap: 15px;
        scrollbar-width: thin;
        scrollbar-color: var(--dark-blue) transparent;
        padding: 5px 10px;
    }

    .form-buttons{
        display: flex;
        justify-content: center;
        gap: 10px;
    }
</style>
