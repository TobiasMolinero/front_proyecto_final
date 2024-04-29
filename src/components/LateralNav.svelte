<script>
    import logo from '../assets/logo.png';
    import iconHome from '../assets/iconos/inicio.svg';
    import iconSales from '../assets/iconos/ventas.svg';
    import iconCharge from '../assets/iconos/cobros.svg'
    import iconBills from '../assets/iconos/gastos.svg';
    import iconProduct from '../assets/iconos/palta.svg'
    import iconInventory from '../assets/iconos/inventario.svg';
    import userManagement from '../assets/iconos/user-manag.svg';

</script>

<aside class="lateral-nav">
    <img class="logo" src={logo} alt="logo">
    <hr>
    <nav class="nav">
        <ul class="nav-list">
            <li class="nav-item ">
                <img src={iconHome} alt="Gestión de usuarios">
                <p>Inicio</p>
            </li>
            <li class="nav-item">
                <img src={iconSales} alt="Gestión de usuarios">
                <p>Ventas</p>
            </li>
            <li class="nav-item">
                <img src={iconCharge} alt="Gestión de usuarios">
                <p>Cobranzas</p>
            </li>
            <li class="nav-item">
                <img src={iconBills} alt="Gestión de usuarios">
                <p>Gastos</p>
            </li>
            <li class="nav-item">
                <img src={iconProduct} alt="Gestión de usuarios">
                <p>Productos</p>
            </li>
            <li class="nav-item">
                <img src={iconInventory} alt="Gestión de usuarios">
                <p>Inventario</p>
            </li>
            <li class="nav-item">
                <img src={userManagement} alt="Gestión de usuarios">
                <p>Gestionar usuarios</p>
            </li>
        </ul>
    </nav>
</aside>

<style>
    .lateral-nav{
        display: flex;
        flex-direction: column;
        width: 250px;
        padding: 5px 10px;
        height: 100%;
        background: var(--dark-blue);
        box-shadow: 0 0 6px #000000;
        z-index: 2;
    }

    .logo{
        width: 100%;
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
        display: flex;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        border-radius: 5px;
        padding: 4px 10px;
    }
    .nav-item:hover{
        background: var(--light-blue);
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