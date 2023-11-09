import { App } from 'vue'
import Breadcrumb from './main.vue'
Breadcrumb.install = function (app: App) {
  // 组件注册，按需引入
  app.component(Breadcrumb.name, Breadcrumb)
  return app
}

export default Breadcrumb
