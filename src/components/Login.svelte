<script lang="ts">
    import logo from '../assets/herramientas.webp'
    import { InputLibre, ButtonForm } from "@lib";
    import { createForm, http } from '@controlers';
    import { loginSchema } from './schemas';
    import { loginValidator } from './validators';
    import { loginAction } from '@store';
    import { loading } from '@utils-alerts';

    const {form, errors, handleSubmit} = createForm({
        initialValues: loginSchema,
        validationSchema: loginValidator,
        onSubmit: data => {
            loading.fire()
            http.post("/usuarios/login", data)
            .then(results => {
                const user: string = results.data.usuario;
                const rol: string = results.data.rol;
                const id: number = results.data.id_usuario
                loginAction.login(user, rol, id);
            })
            .catch(() => {
                loginAction.logout
            })
        }
    })

</script>


<div class="page-login">
    <div class="background">
        <div class="hero">
            <div class="content-hero">
                <div class="flex items-center gap-[20px]">
                    <img class="image w-[180px] h-[180px]" src={logo} alt="imagen">
                    <h1 class="text-white text-[40px] font-[600]">ToolsManagament</h1>
                </div>
                <div class="mt-[20px]">
                    <h2 class="text-white text-[30px]">Sistema de gestión para negocios</h2>
                    <h5 class="text-[#cfcfcf]">Desarrollado por Tobias Molinero</h5>
                </div>
            </div>
        </div>
        <div class="container-login">
            <div class="login">
                <h2 class="text-center mb-[20px]">Iniciar Sesion</h2>
                <form on:submit|preventDefault={handleSubmit} class="form-login">
                    <div class="inputs">
                        <InputLibre label="Usuario*" type="text" id="inputUsuario" bind:value={$form.usuario} error={$errors.usuario ? true : false}/>
                        <InputLibre label="Contraseña*" type="password" id="inputContraseña" bind:value={$form.contraseña} error={$errors.contraseña ? true : false}/>
                    </div>
                    <div class="form-button">
                        <ButtonForm type="submit" text="Ingresar"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 

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

    /* h1{
        color: #b2c261;
    }

    h5{
        color: #cfcfcf;
        font-weight: 400;
    } */

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
/* 
    h2{
        text-align: center;
        margin-bottom: 20px;
    } */

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