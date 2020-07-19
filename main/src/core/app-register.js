import {
    registerMicroApps,
    runAfterFirstMounted,
    setDefaultMountApp,
    start,
    initGlobalState,
} from "qiankun";
import store from '../store/index'

/**
 * @name 导入qiankun应用间通信机制appStore
 */
import appStore from '../utils/app-store'
/**
 * @name 声明要传递给子应用的信息
 * @param data 主应要传递给子应用的数据类信息
 * @param emits 主应要传递给子应用的方法类信息
 * @param GLOBAL 主应要传递给子应用的全局常量
 * @param utils 主应要传递给子应用的工具类信息（只是一种方案）
 * @param components 主应要传递给子应用的组件类信息（只是一种方案）
 */
let props = {
    data: store.getters.appMsg,
    // emits,
    // GLOBAL
}

/**
 * @name 声明子应用挂载dom，如果不需要做keep-alive，则只需要一个dom即可；
 */
const appContainer = "#subapp-viewport";

/**
 * @name 启用qiankun微前端应用
 * @param {Array} list 应用注册表信息
 */
const qianKunStart = (list) => {
    // console.log(list)
    /**
     * @name 处理子应用注册表数据
     */
    let apps = []; // 子应用数组盒子
    let defaultApp = null; // 默认注册应用路由前缀
    let isDev = process.env.NODE_ENV === 'development'; // 根据开发环境|线上环境加载不同entry
    list.forEach(i => {
        apps.push({
            name: i.module, // 子应用app name
            entry: isDev ? i.devEntry : i.depEntry, // 子应用的入口地址
            container: appContainer, // 挂载子应用内容的dom节点
            activeRule: i.routerBase, // 子应用的路由前缀
            props: { //主项目传递给子项目的数据
                ...props,
                routes: i.data || [],
                routerBase: i.routerBase,
            }
        })
        // console.log(apps)
        if (i.defaultRegister) defaultApp = i.routerBase;
    });
    /**
     * @name 注册子应用
     * @param {Array} list subApps
     */
    registerMicroApps(
        apps, {
            beforeLoad: [
                app => {
                    console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
                },
            ],
            beforeMount: [
                app => {
                    console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
                },
            ],
            afterUnmount: [
                app => {
                    console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
                },
            ],
        },
    )

    /**
     * @name 设置默认进入的子应用
     * @param {String} 需要进入的子应用路由前缀
     */
    setDefaultMountApp(defaultApp + '/front');

    /**
     * @name 启动微前端
     */
    start();

    /**
     * @name 微前端启动进入第一个子应用后回调函数
     */
    runAfterFirstMounted(() => {});

    /**
     * @name 启动qiankun应用间通信机制
     */
    appStore(initGlobalState);
}

export default qianKunStart;