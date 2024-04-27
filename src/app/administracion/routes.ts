// @ts-nocheck
import { wrap } from 'svelte-spa-router/wrap'

const routes = {
    '/Usuarios': wrap({ asyncComponent: () => import('./usuarios/Modul.svelte') }),
};

export default routes;