/**
 * @name 此文件处理登陆身份鉴权
 */

import store from '../store/index'
import http from '../api/http'
/**
 * @name 导入qiankun注册微应用方法
 */
import qianKunStart from "./app-register"

/**
 * @name 请求获取服务端子应用注册表
 */
const getAppConfigs = () => {
    http.get('/app').then(res => {
        console.log(res)
        let appList = res.data.apps
        let _menu = []
        appList.forEach(i => {
            _menu.push(...i.data)
        })
        store.dispatch('setUserApp', _menu)
        /**
         * @name 启用qiankun微前端应用，已启动过用手动加载，未启动过正常注册
         */
        // console.log(appList)
        qianKunStart(appList);
    })
}

/**
 * @name 验证用户身份并注册微应用
 */
const microAppStart = () => {
    const token = sessionStorage.getItem('token');
    /**
     * @name 已登录状态获取服务端微应用注册表
     */
    if (token) {
        getAppConfigs();
        return;
    }
}

export default microAppStart