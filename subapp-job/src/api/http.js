import Vue from 'vue'
import axios from 'axios'
import store from '../store/index'

const actionMapping = {
    'get': 'view',
    'post': 'add',
    'put': 'edit',
    'delete': 'delete'
}
axios.defaults.withCreadentials = true;
axios.interceptors.request.use(
    config => {
        // console.log(config)
        if (config.url !== 'login') {
            // 不是登录的请求，就在请求头中加入token
            config.headers.Authorization = sessionStorage.getItem('token')
            const action = actionMapping[config.method]
            // 判断非权限范围内的请求 add view edit delete
            const router = store.getters.appRouter
            const currentRight = router.currentRoute.meta
            if (currentRight && currentRight.indexOf(action) === -1) {
                // 没有权限
                alert('没有权限')
                return Promise.reject(new Error('没有权限'))
            }
            // 判断当前请求的行为
            // restful风格请求 get请求=>view  post请求=>add  put请求=>edit  delete请求=>delete
        }
        return config
    }
)
// 响应拦截
axios.interceptors.response.use(
    response => {
        console.log(response)
        if (response.data.meta.status === 401) {
            console.log('token错误')
            // window.history.pushState(null, null, 'http://localhost:8080/login');
            // router.push('/login')
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