<script lang="ts">
    import { onMount } from "svelte";
    import { loginStore } from "@store";
    import { http } from '@controlers';
    import { ButtonOpenModal } from '@lib';
    import FormUser from "../usuarios/components/FormUser.svelte";

    // let isLoading: boolean = true;
    let id: number;
    let rol: string;
    let dataUser: any;
    let form: boolean = false;

    loginStore.subscribe(data => {
        id = data.id;
        if(data.rol === 'admin'){
            rol = 'Admin';
        } else if(data.rol === 'empleado'){
            rol = 'Empleado';
        }
    })

    const openShowForm = () => {
        form ? form = false : form = true;
    }


    const getUser = () => {
        http.get(`/usuarios/one/${id}`)
        .then((results) => {
            dataUser = results.data;
        })
    }

    onMount(() => {
        getUser();
    })

</script>


<div class="container">
    <div class="header">
        <h1>Tobias Molinero</h1>
        <span class="card-rol">Admin</span>
    </div>
    <div class="body">
        <ul class="data-list">
            <li class="item">
                <span>
                    Correo: 
                </span>
                tobias@gmail.com
            </li>
            <li class="item">
                <span>
                    Telefono: 
                </span>
                3815673581
            </li>
            <li class="item">
                <span>
                    Nombre de usuario: 
                </span>
                TobiasM
            </li>
        </ul>
    </div>
    <div class="footer">
        <div class="footer-button">
            <ButtonOpenModal text="Modificar datos" on:openform={openShowForm}/>
        </div>
    </div>
</div>

{#if form}
    <FormUser id={id} isEdit={true} on:closeform={openShowForm}/>
{/if}

<style>
    .container{
        height: 100%;
        margin: 50px;
    }

    .header{
        display: flex;
        gap: 20px;
        padding: 0 20px;
    }

    .card-rol{
        background: var(--dark-blue);
        padding: 10px 20px;
        font-weight: 500;
        font-size: 18px;
        color: #fff;
        border-radius: 15px;
        box-shadow: 2px 2px 5px #00000080;
    }

    .body{
        padding: 0 20px;
        margin: 20px 0;
    }

    .data-list{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .item span{
        font-size: 16px;
        font-weight: 700;
    }

    .footer{
        margin-top: 20px;
        display: flex;
        justify-content: start;
        padding: 10px 20px;
    }

    .footer-button{
        width: 140px;
        height: 40px;
    }
</style>