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
    delete_product: '/admin/productos/delete/',

    //Categoria productos
    delete_categorie_product: '/admin/cat-product/delete/'
}

export const gral_routes = {
    validate_session: '/validar-sesion',
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
    
    //Categoria producto
    get_categories: '/productos/categorias',
    create_categorie_product: '/cat-producto/create',
    edit_categorie_product: '/cat-producto/edit/'
}