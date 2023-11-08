# Card组件

## 基础用法

卡片包含标题，内容以及操作区域。
Card 组件由 header 和 body 组成。 header 是可选的，其内容取决于一个具名的 slot。
<preview path="../examples/GCard/base.vue"></preview>

## 简单卡片

卡片可以只有内容区域。
<preview path="../examples/GCard/simple.vue"></preview>

## 有图片内容的卡片

可配置定义更丰富的内容展示。

配置 body-style 属性来自定义 body 部分的样式。 在这个例子中我们还使用了 el-col 组件来布局。
<preview path="../examples/GCard/picture.vue"></preview>

## 带有阴影效果的卡片

你可以定义什么时候展示卡片的阴影效果。

通过 shadow 属性设置卡片阴影出现的时机。 该属性的值可以是：always、hover 或 never。
<preview path="../examples/GCard/shadow.vue"></preview>

## API

### Attributes

| 名称       | 类型   | 默认值 | 说明             |
| ---------- | ------ | ------ | ---------------- |
| header     | string | -      | 卡片标题         |
| body-style | object | -      | body 的 CSS 样式 |
| body-class | string | -      | 卡片的自定义类名 |
| shadow     | enum   | always | 卡片阴影显示时机 |

### Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
| header  | 卡片标题内容   |
