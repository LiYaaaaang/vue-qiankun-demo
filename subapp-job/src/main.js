import './api/http'
import "./public-path";
import './utils/permission'

import {
  lifeCycle,
  render
} from "./life-cycle";
console.log(55555)
/**
 * @name 导出微应用生命周期
 */
const {
  bootstrap,
  mount,
  unmount
} = lifeCycle();
// const {
//   mount
// } = lifeCycle()
export {
  bootstrap,
  mount,
  unmount
};


/**
 * @name 单独环境直接实例化vue
 */
const __qiankun__ = window.__POWERED_BY_QIANKUN__;
__qiankun__ || render();