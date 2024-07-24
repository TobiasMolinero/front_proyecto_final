<script lang="ts">
    import { fade } from 'svelte/transition';
    import { push } from 'svelte-spa-router';
    import logo from '../assets/herramientas.webp';
    import IconUser from '../assets/iconos/usuario.svg';
    import userIcon from '../assets/iconos/user-view.svg';
    import logoutIcon from '../assets/iconos/logout.svg';
    import { loginAction, loginStore } from '@store';
    import { question, success } from '../utils/alerts';

    let dropMenu: boolean = false;
    let user: string = $loginStore.userName || 'usuario';

    const showHiddenDropdownMenu = () => {
        dropMenu ? dropMenu = false : dropMenu = true;
    }

    const logout = () => {
        question.fire({
            text: '¿Esta seguro que desea cerrar sesión?'
        }).then(result => {
            if (result.isConfirmed){
                
                push('/');
                
                success.fire({
                    text: 'La sesión finalizo con exito.'
                })
                
                loginAction.logout();
            } 
        })
    }
</script>

<svelte:body on:click={() => dropMenu = false} />

<header class="header bg-slate-800 h-[60px]">
    <div class="flex items-center gap-[10px]">
        <img class="logo" src={logo} alt="">
        <p class="text-white font-[500]">ToolsManagement</p>
    </div>
    <span class="relative flex justify-end w-[400px]">
        <button on:click|stopPropagation={showHiddenDropdownMenu}>
            {user}
            <img src={IconUser} alt="icono usuario">
        </button>
        {#if dropMenu}
            <div transition:fade={{duration: 150}} class="dropdown-menu absolute top-[65px] bg-slate-800">
                <ul class="menu">
                    <li class="menu-item">
                        <a class="item-link" href="/#/Administracion/MiPerfil" on:click={showHiddenDropdownMenu}>
                            <img src={userIcon} alt="icono mi perfil">
                            Mi perfil
                        </a>
                    </li>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
                    <li class="menu-item logout" role="button" >
                        <button class="item-link" on:click={logout}>
                            <img src={logoutIcon} alt="icono logout">
                            Cerrar sesión
                        </button>
                    </li>
                </ul>
            </div>
        {/if}
        </span>
</header>

<style>
    .header{
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .logo{
        width: 40px;
        height: 40px;
    }

    span{
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
    }

    button{
        display: flex;
        align-items: center;
        gap: 10px;
        color: white;
        border: none;
        background: transparent;
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
    }

    img{
        width: 60px;
    }

    .dropdown-menu{
        /* position: absolute;
        top: 65px;
        left: -90px; */
        width: 220px;
        padding: 15px 20px;
        border-radius: 5px;
        transform: translateY(0);
    }

    .dropdown-menu ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .menu-item{
        border-radius: 5px;
    }
    .menu-item:hover{
        background: var(--light-blue);
    }

    .item-link{
        display: flex;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        border-radius: 5px;
        padding: 4px 10px;
        text-decoration: none;
        color: #fff;
    }

    .menu-item img{
        width: 25px;
    }

    .menu-item button{
        font-weight: 400;
        width: 100%;
    }

    .logout{
        color: white;
    }
    .logout:hover button{ 
        background: #e0baba;
        color: red;
        font-weight: 600;
    }
</style>