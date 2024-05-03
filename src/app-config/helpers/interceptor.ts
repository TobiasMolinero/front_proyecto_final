import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { success, alert_error} from '../../utils/alerts';

let error_request = (error: any) => {
    console.log(error)
    return Promise.reject(error)
}

let error_response = (error: any) => {

    console.log(error)

    let res: any ;

    if(error.response.data.message){
        alert_error.fire({
            text: error.response.data.message
        })
        res.message = error.response.data.message;
    }


    return Promise.reject(res);
}

let fn_request = (request: AxiosRequestConfig) => {
    let token = localStorage.getItem('token');

    request.headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": 'application/json'
    } 

    return request;
}

let fn_response = (response: AxiosResponse) => {

    let res: any = {
        data: response.data.data,
        status: response.status,
        statusText: response.statusText || ''
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

