export const admin_routes = {
    //Usuarios
    create_user: '/admin/usuarios/altausuario',
    edit_user: '/admin/usuarios/edit/',
    users_list: '/admin/usuarios/listarusuarios',
    delete_user: '/admin/usuarios/bajausuario/',
    edit_password: '/admin/usuarios/editpassword/',

    //Clientes
    delete_customer: '/admin/clientes/delete/'
}

export const gral_routes = {
    //Usuarios
    one_user: '/usuarios/one/',
    login: '/usuarios/login',
    
    
    //Clientes
    one_customer: '/clientes/one/',
    all_customers: '/clientes/all',
    create_customer: '/clientes/create',
    edit_customer: '/clientes/edit/',
}