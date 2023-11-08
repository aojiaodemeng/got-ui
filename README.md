# got-ui

This template should help get you started developing with Vue 3 in Vite.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Doc Project Setup

```sh
npm run docs:dev
```

## 关于包的发布

打包，生成lib文件夹

```sh
npm run build
```

公开发布

```
npm publish --access public   // 每次发布时先更新下package.json里的version
```

## 关于文档指南页面的部署

部署前先切换到gh-pages分支

```sh
npm run deploy
```

部署的页面在https://aojiaodemeng.github.io/got-ui/
