import { App } from 'vue'
import Divider from './main.vue'
Divider.install = function (app: App) {
  // 组件注册，按需引入
  app.component(Divider.name, Divider)
  return app
}

export default Divider
