<script lang="ts">
    import IconUser from '../assets/iconos/usuario.svg';
    import user from '../assets/iconos/user-view.svg';
    import logout from '../assets/iconos/logout.svg';

    let dropMenu: boolean = false;

    function showHiddenDropdownMenu(){
        console.log(dropMenu)
        dropMenu ? dropMenu = false : dropMenu = true;
    }
</script>

<header class="header">
    <span>
        Usuario
        <button on:click|stopPropagation={showHiddenDropdownMenu}>
            <img src={IconUser} alt="icono usuario">
        </button>
        <div class="dropdown-menu {dropMenu ? '' : 'hidden'}">
            <ul class="menu">
                <li class="menu-item">
                    <img src={user} alt="icono mi perfil">
                    Mi perfil
                </li>
                <li class="menu-item logout">
                    <img src={logout} alt="icono logout">
                    Cerrar sesión
                </li>
            </ul>
        </div>
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
    }

    span{
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
        height: 100%;
        color: aliceblue;
        font-size: 18px;
        font-weight: 600;
    }

    button{
        border: none;
        background: transparent;
        cursor: pointer;
    }

    img{
        width: 60px;
    }

    .dropdown-menu{
        position: absolute;
        top: 65px;
        left: -70px;
        width: 220px;
        padding: 15px 20px;
        background: var(--dark-blue);
        box-shadow: 0 0 6px #00000050;
        border-radius: 5px;
        transform: translateY(0);
    }
    .hidden{
        position: absolute;
        top: 65px;
        left: -70px;
        width: 220px;
        padding: 15px 20px;
        background: var(--dark-blue);
        box-shadow: 0 0 6px #00000050;
        border-radius: 5px;
        transform: translateY(-1000px);
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
    }
</style>