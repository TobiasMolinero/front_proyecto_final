import type { AxiosResponse } from 'axios';

let fn_response = (response: AxiosResponse) => {

    let res: any = {
        data: response.data.data,
        status: response.status,
        statusText: response.statusText || '',
        tag: response.data?.tag || 'default-tag',
        resolve: response.data?.status || 'default-status',
    }

    let tkn = response.data.tkn;

    if (tkn) {
        localStorage.setItem('tkn', tkn);
    }

    if(response.data.message) res.message = response.data.message;

    console.info(res);

    return res
}

export let response = {
    fn_response
}