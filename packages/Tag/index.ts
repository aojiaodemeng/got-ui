import { App } from 'vue'
import Tag from './src/index.vue'
Tag.install = function (app: App) {
  // 组件注册，按需引入
  app.component(Tag.name, Tag)
  return app
}

export default Tag
