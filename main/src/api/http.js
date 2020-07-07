import Vue from 'vue'
import axios from 'axios'

axios.defaults.withCreadentials = true;

axios.interceptors.request.use(
    config => {
        console.log(config)
        return config
    }, error => {
        return Promise.reject(error);
    }
)
// 响应拦截
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error);
    }
)
Vue.prototype.$http = axios

export default axios