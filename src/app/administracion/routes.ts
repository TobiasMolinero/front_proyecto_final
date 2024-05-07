// @ts-nocheck
import { wrap } from 'svelte-spa-router/wrap'

const routes = {
    '/Inicio': wrap({ asyncComponent: () => import('./inicio/Modul.svelte') }),
    '/Clientes': wrap({ asyncComponent: () => import('./clientes/Modul.svelte') }),
    '/Usuarios': wrap({ asyncComponent: () => import('./usuarios/Modul.svelte') }),
    '/MiPerfil': wrap({ asyncComponent: () => import('./mi-perfil/Modul.svelte')}),
};

export default routes;