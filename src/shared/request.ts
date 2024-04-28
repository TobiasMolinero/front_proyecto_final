import axios from 'axios';
import { instance } from '../app-config/helpers/instancesRequest';

export let http = {
    get: axios.get,
    post:axios.post,
    put:axios.put,
    patch: axios.patch,
    delete: axios.delete,
    instance
}