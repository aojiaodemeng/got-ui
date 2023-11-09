# Icon图标

## 所有内置Icon

<preview path="../examples/GIcon/all.vue"></preview>

## 操作常用

<preview path="../examples/GIcon/normal.vue"></preview>

## Status状态Icon

<preview path="../examples/GIcon/status.vue"></preview>

## Loading加载 Icon

<preview path="../examples/GIcon/loading.vue"></preview>

## 方向Icon

<preview path="../examples/GIcon/arrow.vue"></preview>

## 计算Icon

<preview path="../examples/GIcon/count.vue"></preview>

## 方形Icon

<preview path="../examples/GIcon/square.vue"></preview>

## 自定义Icon

- step1.项目中以任何方式引入font-awesome.css
- step2.在main.js配置如下代码

```js
import GotUi from '@aojiaodemeng/got-ui'
GotUi.config({
  icon: {
    cname: 'fa', //自定义字体的font-family
    prefix: 'fa-' //自定义字体的前缀
  }
})
```

- step3.使用

```js
<template>
<!-- 全局配置cname ,prefix -->
<custom-icon name="chrome"/>
<custom-icon name="firefox"/>
<custom-icon name="safari"/>
<!-- 行内配置cname ,prefix -->
<custom-icon cname="fa" prefix="fa-" name="opera"/>
</template>
```
