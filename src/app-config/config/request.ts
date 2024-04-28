import axios from 'axios';
import { requestValidate } from '../helpers/validateRequest';

export let configHTTP = () => {
    axios.defaults.baseURL = "http://localhost:3000";
    axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    axios.defaults.timeout = 3 * 1000;
    axios.defaults.validateStatus = requestValidate;
}

