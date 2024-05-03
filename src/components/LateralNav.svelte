<script>
    import iconHome from '../assets/iconos/inicio.svg';
    import iconSales from '../assets/iconos/ventas.svg';
    import iconCharge from '../assets/iconos/cobros.svg'
    import iconBills from '../assets/iconos/gastos.svg';
    import iconProduct from '../assets/iconos/palta.svg'
    import iconInventory from '../assets/iconos/inventario.svg';
    import userManagement from '../assets/iconos/user-manag.svg';

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
                <a href="">
                    <img src={iconSales} alt="Gestión de usuarios">
                    <p>Ventas</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="">
                    <img src={iconCharge} alt="Gestión de usuarios">
                    <p>Cobranzas</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="">
                    <img src={iconBills} alt="Gestión de usuarios">
                    <p>Gastos</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="">
                    <img src={iconProduct} alt="Gestión de usuarios">
                    <p>Productos</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="">
                    <img src={iconInventory} alt="Gestión de usuarios">
                    <p>Inventario</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="/#/Administracion/Usuarios">
                    <img src={userManagement} alt="Gestión de usuarios">
                    <p>Gestionar usuarios</p>
                </a>
            </li>
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