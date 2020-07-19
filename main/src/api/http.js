import Vue from 'vue'
import axios from 'axios'
import router from '../router/index'

axios.defaults.withCreadentials = true;

axios.interceptors.request.use(
    config => {
        // console.log(config)
        if (config.url !== 'login') {
            // 不是登录的请求，就在请求头中加入token
            config.headers.Authorization = sessionStorage.getItem('token')
        }
        return config
    }, error => {
        return Promise.reject(error);
    }
)
// 响应拦截
axios.interceptors.response.use(
    response => {
        console.log(response)
        if (response.data.meta.status === 401) {
            router.push('/login')
            sessionStorage.clear()
            window.location.reload()
        }
        return response
    },
    error => {
        return Promise.reject(error);
    }
)
Vue.prototype.$http = axios

export default axios