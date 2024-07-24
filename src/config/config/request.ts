import axios from 'axios';
import { request, response } from '../helpers/interceptor';

export let configHTTP = () => {
    axios.defaults.baseURL = "http://localhost:3000";
    axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
}

export let configInterceptor = () => {
    axios.interceptors.request.use(request.fn_request, request.error_request);
    axios.interceptors.response.use(response.fn_response, response.error_response);
}

