import type {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { success, alert_error } from "../../utils/alerts";
import { loginAction } from "@store";

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

let error_request = (error: any) => {
  return Promise.reject(error);
};

let error_response = (error: any) => {
  let res: any = {
    data: error.response.data,
    status: error.response.status,
    statusText: error.response.statusText || "",
  };
  console.log(res);

  if (res.data.message) {
    alert_error.fire({
      text: res.data.message,
    });
  }

  if (res.data.logout) {
    loginAction.logout();
  }

  return Promise.reject(res);
};

let fn_request = (request: AdaptAxiosRequestConfig) => {
  let token = localStorage.getItem("token");

  request.headers.set({
    Authorization: `Bearer ${token}`,
  });

  return request;
};

let fn_response = (response: AxiosResponse) => {
  let res: any = {
    data: response.data.data,
    status: response.status,
    statusText: response.statusText || "",
  };

  let token = response.data.token;

  if (token) {
    localStorage.setItem("token", token);
  }

  if (response.data.message) {
    success.fire({
      text: response.data.message,
    });
    res.message = response.data.message;
  }

  console.info(res);

  return res;
};

export let request = {
  fn_request,
  error_request,
};

export let response = {
  fn_response,
  error_response,
};
