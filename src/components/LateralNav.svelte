<script>
    import iconHome from '../assets/iconos/inicio.svg';
    import iconSales from '../assets/iconos/ventas.svg';
    import iconOrders from '../assets/iconos/pedidos.svg';
    import iconBills from '../assets/iconos/gastos.svg';
    import iconClientes from '../assets/iconos/clientes.svg';
    import iconProduct from '../assets/iconos/palta.svg';
    import iconInventory from '../assets/iconos/inventario.svg';
    import iconConfig from '../assets/iconos/gear.svg';
    import userManagement from '../assets/iconos/user-manag.svg';
    import { loginStore } from '@store';
</script>

<aside class="lateral-nav">
    <nav class="nav">
        <ul class="nav-list">
            <li class="nav-item ">
                <a href="/#/Administracion/Inicio">
                    <img src={iconHome} alt="Gestión de usuarios">
                    <p>Inicio</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="/#/Administracion/Pedidos">
                    <img src={iconOrders} alt="pedidos">
                    <p>Pedidos</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="/#/Administracion/Ventas">
                    <img src={iconSales} alt="Ventas">
                    <p>Cobrar ventas</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="/#/Administracion/Clientes">
                    <img src={iconClientes} alt="clientes">
                    <p>Clientes</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="/#/Administracion/Gastos">
                    <img src={iconBills} alt="Gastos">
                    <p>Gastos</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="/#/Administracion/Productos">
                    <img src={iconProduct} alt="productos">
                    <p>Productos</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="/#/Administracion/Inventario">
                    <img src={iconInventory} alt="inventario">
                    <p>Inventario</p>
                </a>
            </li>
            {#if $loginStore.rol === 'admin'}
                <li class="nav-item">
                    <a href="/#/Administracion/Configuracion">
                        <img src={iconConfig} alt="Configuracion">
                        <p>Configuración</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/#/Administracion/Usuarios">
                        <img src={userManagement} alt="Gestión de usuarios">
                        <p>Gestionar usuarios</p>
                    </a>
                </li>
            {/if}
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
        background: var(--dark-blue);
    }

    .nav{
        overflow: auto;
        margin: 20px 0;
        flex: 1;
        scrollbar-width: thin;
        scrollbar-color: transparent transparent;
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
    .nav-item:hover{
        background: var(--light-blue);
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
        font-size: 16px;
    }

    .nav-item img{
        width: 25px;
    }
</style>