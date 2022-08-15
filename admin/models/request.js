import { Message } from "element-ui";
import axios from "axios";
axios.defaults.timeout = 20000;
axios.defaults.baseURL = "/api";

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

const handleErrorRequest = (error) => {
  const { response } = error;
  const status = response ? response.status : 408;

  if (response) {
    const { data } = response;
    const { errors } = data;
    const message = data.message || "服务器发送错误，请稍后再试";
    if (status === 401) {
      console.log("没有登录");
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
      console.log(error);
    } else if (status === 419) {
      console.log("页面过期");
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    } else if (status === 422 || status === 423 || status === 429) {
      Object.keys(errors).forEach((errorKey) => {
        const errorValue = errors[errorKey].join("\n");
        Message.error(errorValue);
      });
    } else {
      Message.error(message);
    }
  } else {
    Message.error("网络超时");
  }
};

axios.interceptors.response.use(
  (res) => {
    switch (true) {
      case res.data && res.data.code === 200:
        return res.data.data;
      case res.data && res.data.code !== 200:
        if (res.data.data) {
          Message.error(res.data.data);
          return Promise.reject(res.data.data);
        }
        Message.error(res.data);
        return Promise.reject(res.data);
      default:
        return res.data;
    }
  },
  (error) => {
    handleErrorRequest(error);
    return Promise.reject(error);
  }
);

export default {
  post(url = "", data = {}, config = {}) {
    return axios.post(url, data, config);
  },
  put(url = "", data = {}, config = {}) {
    return axios.put(url, data, config);
  },
  get(url = "", params = {}, config = {}) {
    const OPTIONS = Object.assign({ params }, config);
    return axios.get(url, OPTIONS);
  },
  delete(url = "", params = {}, config = {}) {
    const OPTIONS = Object.assign({ params }, config);
    return axios.delete(url, OPTIONS);
  },
};
