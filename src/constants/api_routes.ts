export const admin_routes = {
    //Usuarios
    create_user: '/admin/usuarios/altausuario',
    edit_user: '/admin/usuarios/edit/',
    users_list: '/admin/usuarios/listarusuarios',
    delete_user: '/admin/usuarios/bajausuario/',
    edit_password: '/admin/usuarios/editpassword/',

    //Clientes
    delete_customer: '/admin/clientes/delete/',

    //Productos
    edit_product: '/admin/productos/edit/',
    delete_product: '/admin/productos/delete/'
}

export const gral_routes = {
    //Usuarios
    one_user: '/usuarios/one/',
    login: '/usuarios/login',
    get_roles: '/usuarios/roles',
    
    
    //Clientes
    one_customer: '/clientes/one/',
    all_customers: '/clientes/all',
    create_customer: '/clientes/create',
    edit_customer: '/clientes/edit/',

    //Productos
    one_product: '/productos/one/',
    all_products: '/productos/all',
    create_product: '/productos/create',
    get_categories: '/productos/categorias'

}