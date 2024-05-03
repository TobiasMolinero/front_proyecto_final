import axios from 'axios';
import type { AxiosRequestConfig, AxiosInstance } from 'axios'

let httpInstans = (baseURL: string): AxiosInstance => {
    let config: AxiosRequestConfig = {
        baseURL
    }
    return axios.create(config);
}

export let instance = {
    httpInstans
}