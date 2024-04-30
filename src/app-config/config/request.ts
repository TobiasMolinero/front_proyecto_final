import axios from 'axios';
import { requestValidate } from '../helpers/validateRequest';
import { response } from '../helpers/interceptor';

export let configHTTP = () => {
    axios.defaults.baseURL = "http://localhost:3000";
    axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    axios.defaults.timeout = 5 * 1000;
    axios.defaults.validateStatus = requestValidate;
}

export let configInterceptor = () => {
    axios.interceptors.response.use(response.fn_response, response.error_response);
}

