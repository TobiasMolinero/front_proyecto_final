<script>
    import iconHome from '../assets/iconos/inicio.svg';
    import iconSales from '../assets/iconos/ventas.svg';
    import iconBills from '../assets/iconos/gastos.svg';
    import iconClientes from '../assets/iconos/clientes.svg';
    import iconProduct from '../assets/iconos/barcode.svg';
    import iconInventory from '../assets/iconos/inventario.svg';
    import iconConfig from '../assets/iconos/gear.svg';
    import userManagement from '../assets/iconos/user-manag.svg';
    import { loginStore } from '@store';
</script>

<aside class="lateral-nav bg-slate-900">
    <nav class="nav">
        <ul class="nav-list">
            <li class="nav-item hover:shadow hover:bg-blue-950">
                <a href="/#/Administracion/Inicio">
                    <img src={iconHome} alt="Gestión de usuarios">
                    <p>Inicio</p>
                </a>
            </li>
            <li class="nav-item hover:shadow hover:bg-blue-950">
                <a href="/#/Administracion/Ventas">
                    <img src={iconSales} alt="Ventas">
                    <p>Ventas</p>
                </a>
            </li>
            <li class="nav-item hover:shadow hover:bg-blue-950">
                <a href="/#/Administracion/Clientes">
                    <img src={iconClientes} alt="clientes">
                    <p>Clientes</p>
                </a>
            </li>
            <li class="nav-item hover:shadow hover:bg-blue-950">
                <a href="/#/Administracion/Gastos">
                    <img src={iconBills} alt="Gastos">
                    <p>Gastos</p>
                </a>
            </li>
            <li class="nav-item hover:shadow hover:bg-blue-950">
                <a href="/#/Administracion/Productos">
                    <img src={iconProduct} alt="productos">
                    <p>Productos</p>
                </a>
            </li>
            <li class="nav-item hover:shadow hover:bg-blue-950">
                <a href="/#/Administracion/Inventario">
                    <img src={iconInventory} alt="inventario">
                    <p>Inventario</p>
                </a>
            </li>
            {#if $loginStore.rol === 'admin'}
                <li class="nav-item hover:shadow hover:bg-blue-950">
                    <a href="/#/Administracion/Usuarios">
                        <img src={userManagement} alt="Gestión de usuarios">
                        <p>Gestionar usuarios</p>
                    </a>
                </li>
            {/if}
            <!-- <li class="nav-item hover:shadow hover:bg-blue-950">
                <a href="/#/Administracion/Configuracion">
                    <img src={iconConfig} alt="Configuracion">
                    <p>Configuración</p>
                </a>
            </li> -->
        </ul>
    </nav>
</aside>

<style>
    .lateral-nav{
        display: flex;
        flex-direction: column;
        width: 220px;
        padding: 5px 10px;
        height: 100%;
    }

    .nav{
        overflow: auto;
        margin: 20px 0;
        flex: 1;
        scrollbar-width: thin;
        scrollbar-color: transparent transparent;
        height: calc(100vh - 10px);
    }

    .nav-list{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .nav-item{
        border-radius: 5px;
        cursor: pointer;
    }
    
    .nav-item a{
        display: flex;
        align-items: center;
        gap: 15px;
        text-decoration: none;
        border-radius: 5px;
        padding: 4px 10px;
    }

    .nav-item p{
        color: aliceblue;
        font-weight: 500;
        font-size: 15px;
    }

    .nav-item img{
        width: 25px;
    }
</style>