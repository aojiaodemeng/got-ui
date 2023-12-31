// 提供组件库全量注册引入及单个组件注册引入

import { type App } from 'vue'
import components from './component'
// 所有组件
export * from './component'

// 完整引入组件
const install = function (app: App) {
  components.forEach((component) => {
    app.use(component as unknown as { install: () => any })
  })
}

export default {
  install
}
