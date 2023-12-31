import { type App } from 'vue'
import Card from './main.vue'
Card.install = function (app: App) {
  // 组件注册，按需引入
  app.component(Card.name, Card)
  return app
}

export default Card
