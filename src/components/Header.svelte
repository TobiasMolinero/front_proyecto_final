<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import IconUser from '../assets/iconos/usuario.svg';
    import userIcon from '../assets/iconos/user-view.svg';
    import logout from '../assets/iconos/logout.svg';
    import { loginStore } from '@store';

    let dropMenu: boolean = false;
    let user: string;

    function showHiddenDropdownMenu(){
        console.log(dropMenu)
        dropMenu ? dropMenu = false : dropMenu = true;
    }

    onMount(() => {
        user = $loginStore.userName;
    })
</script>

<header class="header">
    <span>
        <button on:click={showHiddenDropdownMenu}>
            {user}
            <img src={IconUser} alt="icono usuario">
        </button>
        {#if dropMenu}
            <div transition:fade={{duration: 150}} class="dropdown-menu">
                <ul class="menu">
                    <li class="menu-item">
                        <img src={userIcon} alt="icono mi perfil">
                        Mi perfil
                    </li>
                    <li class="menu-item logout">
                        <img src={logout} alt="icono logout">
                        Cerrar sesión
                    </li>
                </ul>
            </div>
        {/if}
        </span>
</header>

<style>
    .header{
        padding: 0 20px;
        height: min-content;
        background: var(--light-blue);
        background: grey;
        box-shadow: 0 0 10px #00000080;
        display: flex;
        justify-content: end;
        width: 100%;
    }

    span{
        position: relative;
        height: 100%;
    }

    button{
        display: flex;
        align-items: center;
        gap: 10px;
        color: aliceblue;
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
        position: absolute;
        top: 65px;
        left: -90px;
        width: 220px;
        padding: 15px 20px;
        background: var(--dark-blue);
        box-shadow: 0 0 6px #00000050;
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
        display: flex;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        border-radius: 5px;
        padding: 4px 10px;
        color: aliceblue;
    }
    .menu-item:hover{
        background: var(--light-blue);
    }

    .menu-item img{
        width: 25px;
    }

    .logout{
        color: white;
    }
    .logout:hover{
        background: #e0baba;
        color: red;
        font-weight: 600;
    }
</style>