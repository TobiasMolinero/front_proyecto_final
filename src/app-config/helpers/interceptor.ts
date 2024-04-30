import type { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { errorRequest } from './errorRequest';
import { success, alert_error, warning, question } from './alerts';

let error_request = (error: any) => {
    return Promise.reject(error)
}

let error_response = (error: any) => {
    let res = error;
    
    if(res.response.data.message){
        let message = res.response.data.message;
        alert_error.fire({
            text: message,
        })
    }

    return Promise.reject(res);
}

let fn_request = (request: AxiosRequestConfig) => {
    let token = localStorage.getItem('token');

    request.headers = {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json, text/plain, */*"
    } 

    return request;
}

let fn_response = (response: AxiosResponse) => {

    let res: any = {
        data: response.data.data,
        status: response.status,
        statusText: response.statusText || '',
        tag: response.data?.tag || 'default-tag',
        resolve: response.data?.status || 'default-status',
    }

    let token = response.data.token;

    if (token) {
        localStorage.setItem('token', token);
    }

    if(response.data.message){
        success.fire({
            text: response.data.message
        })
        res.message = response.data.message;
    } 

    console.info(res);

    return res
}

export let request = {
    fn_request,
    error_request
}

export let response = {
    fn_response,
    error_response
}

