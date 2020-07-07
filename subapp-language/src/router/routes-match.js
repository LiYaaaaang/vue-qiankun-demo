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
    // console.log(data)
    data.forEach(item => {
      console.log(item)
      if (item[options.url]) {
        let _url = item[options.url].replace(base, "");
        // let _url = item[options.url]
        console.log(_url)
        if (_url === '/java') {
          try {
            let routerItem = {
              path: _url, // 路由路径名
              component: () => import(`@/views/Home.vue`) // 路由映射真实视图路径
            };
            console.log(routerItem)
            routerBox.push(routerItem);
          } catch (err) {
            console.log(err);
          }
        } else if (_url === '/javascript') {
          try {
            let routerItem = {
              path: _url, // 路由路径名
              component: () => import(`@/views/About.vue`) // 路由映射真实视图路径
            };
            console.log(routerItem)
            routerBox.push(routerItem);
          } catch (err) {
            console.log(err);
          }
        }
      }
      // 处理子集
      if (item.children instanceof Array) routerMapFile(item.children);
    });
  }

  /**
   * @error A non-empty path must start with "/"
   * @des 添加错误路径重定向至404报错，需要以'/'开头
   */
  /* let errorBox = {
    path: "*",
    redirect: "/err-404"
  };
  routerBox.push(errorBox); */
  console.log(routerBox)
  return routerBox;
}

export default routeMatch;