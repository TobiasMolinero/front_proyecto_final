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


<div class="grow m-[50px]">
    <div class="flex gap-[20px] py-[20px]">
        <h1>Tobias Molinero</h1>
        <span class="bg-[var(--dark-blue)] p-[10px_20px] font-[500] text-[18px] text-[#fff] rounded-[15px] shadow-[2px_2px_5px_#00000080]">Admin</span>
    </div>
    <div class="py-[20px] mx-[20px]">
        <ul class="flex flex-col gap-[15px]">
            <li class="item">
                <span class="text-[16px] font-[700]">
                    Correo: 
                </span>
                tobias@gmail.com
            </li>
            <li>
                <span class="text-[16px] font-[700]">
                    Telefono: 
                </span>
                3815673581
            </li>
            <li>
                <span class="text-[16px] font-[700]">
                    Nombre de usuario: 
                </span>
                TobiasM
            </li>
        </ul>
    </div>
    <div class="mt-[20px] flex justify-start p-[10px_20px]">
        <div class="w-[150px] h-[40px]">
            <ButtonOpenModal text="Modificar datos" on:openform={openShowForm}/>
        </div>
    </div>
</div>

{#if form}
    <FormUser id={id} isEdit={true} on:closeform={openShowForm}/>
{/if}
