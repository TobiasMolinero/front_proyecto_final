<script lang="ts">
    import logo from '../assets/logo.png'
    import { InputLibre, ButtonForm } from "@lib";
    import { createForm } from '@controlers';
    import { loginSchema } from './schemas';
    import { loginValidator } from './validators';

    const {form, errors, handleSubmit} = createForm({
        initialValues: loginSchema,
        validationSchema: loginValidator,
        onSubmit: data => {
            console.log(data);
        }
    })

</script>

<div class="page-login">
    <div class="background">
        <div class="hero">
            <div class="content-hero">
                <img class="image" src={logo} alt="imagen">
                <div class="text">
                    <h1>Sistema de gestión para empresas agricolas</h1>
                    <h5>Desarrollado por Tobias Molinero</h5>
                </div>
            </div>
        </div>
        <div class="container-login">
            <div class="login">
                <h2>Iniciar Sesion</h2>
                <form on:submit|preventDefault={handleSubmit} class="form-login">
                    <div class="inputs">
                        <InputLibre label="Usuario*" type="text" id="inputUsuario" bind:value={$form.usuario} error={$errors.usuario ? true : false}/>
                        <InputLibre label="Contraseña*" type="password" id="inputContraseña" bind:value={$form.contraseña} error={$errors.contraseña ? true : false}/>
                    <div class="form-button">
                        <ButtonForm type="submit" text="Ingresar"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 
<!-- <h1>LOGIN</h1> -->

<style>
    .page-login{
        background-color: #f2f2f2;
        height: 100vh;
        width: 100vw;
    }

    .background{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: stretch;
    }
    .background::after{
        content: "";
        position: absolute;
        top: -55px;
        left: -100px;
        background: var(--dark-blue);
        width: 1100px;
        height: 600px;
        border-radius: 0 0 50px;
        transform: rotate(-6deg);
        box-shadow: 0 0 10px 5px #00000050;
    }

    .hero{
        width: 60%;
        z-index: 1;
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }

    .content-hero{
        position: relative;
        width: 80%;
    }

    .text{
        transform: translateY(-25px);
    }

    h1{
        color: #b2c261;
    }

    h5{
        color: #cfcfcf;
        font-weight: 400;
    }

    .container-login{
        display: flex;
        align-items: center;
        width: 40%;
        z-index: 1;
    }

    .login{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        box-shadow:0 0 10px 3px #00000025;
        border-radius: 15px;
        padding: 20px;
        width: 340px;
    }

    h2{
        text-align: center;
        margin-bottom: 20px;
    }

    .form-login{
        width: 85%;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .inputs{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .form-button{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }


</style>