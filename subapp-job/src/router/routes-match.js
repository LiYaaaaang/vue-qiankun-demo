import store from '../store/index'
const rightList = store.getters.userApp
const currentRightList = rightList[0]
/**
 * 根据路由匹配地址
 * @param {*} data 路由数据
 * @param {*} base 路由前缀
 * @param {*} options 粗略的配置项
 */
function routeMatch(
  data,
  base,
  options = {
    url: "url",
    name: "name",
    id: "id",
    permissions: "permissions"
  }
) {
  if (!data instanceof Array) return [];
  // 创建路由盒子
  let routerBox = [];

  routerMapFile(data);
  /**
   * @name 路由映射真实视图路径
   */
  function routerMapFile(data) {
    data.forEach(item => {
      if (item[options.url]) {
        let _url = item[options.url].replace(base, "");
        if (_url === '/front') {
          let routerItem = {
            path: _url, // 路由路径名
            meta: currentRightList.children[0].rights,
            component: () => import(`@/views/Home.vue`) // 路由映射真实视图路径
          };
          routerBox.push(routerItem);
        } else if (_url === '/back') {
          let routerItem = {
            path: _url, // 路由路径名
            meta: currentRightList.children[1].rights,
            component: () => import(`@/views/About.vue`) // 路由映射真实视图路径
          };
          routerBox.push(routerItem);
        }
      }
      // 处理子集
      if (item.children instanceof Array) routerMapFile(item.children);
    });
  }

  /**
   * @des 添加错误路径，'*'通配符
   */
  let errorBox = {
    path: "*",
    component: () => import(`@/views/NotFound.vue`)
  };
  routerBox.push(errorBox);
  console.log(routerBox)
  return routerBox;
}

export default routeMatch;