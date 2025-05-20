# 微前端

## 初始化

> 新建`monorepo`文件
>
> 在目录下初始化主应用`main`

```shell
PS C:\Users\Administrator\Desktop\微前端\monorepo> npm init vue
Need to install the following packages:
create-vue@3.16.4
Ok to proceed? (y)
┌  Vue.js - The Progressive JavaScript Framework
│
◇  请输入项目名称：
│  main
│
◇  请选择要包含的功能： (↑/↓ 切换，空格选择，a 全选，回车确认)
│  TypeScript, JSX 支持, Router（单页面应用开发）, Pinia（状态管理）, Vitest（单元测试）, ESLint（错误预防）, Prettier（代码格式化）
│
◇  是否引入 Oxlint 以加快检测？（试验阶段）
│  No

正在初始化项目 C:\Users\Administrator\Desktop\微前端\monorepo\main...
│
└  项目初始化完成，可执行以下命令：

   cd main
   npm install
   npm run format
   npm run dev

| 可选：使用以下命令在项目目录中初始化 Git：

   git init && git add -A && git commit -m "initial commit"

# 新建子应用目录(web) 实际开发中子应用不一定在主应用目录下
PS C:\Users\Administrator\Desktop\微前端\monorepo> cd web
# 新建第一个子应用vue
PS C:\Users\Administrator\Desktop\微前端\monorepo\web> npm init vite
│
◇  Project name:
│  vue-demo
│
◇  Select a framework:
│  Vue
│
◇  Select a variant:
│  TypeScript
│
◇  Scaffolding project in C:\Users\Administrator\Desktop\微前端\monorepo\web\vue-demo...
│
└  Done. Now run:

  cd vue-demo
  npm install
  npm run dev
# 新建第二个子应用react
PS C:\Users\Administrator\Desktop\微前端\monorepo\web> npm init vite
│
◇  Project name:
│  react-demo
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript + SWC
│
◇  Scaffolding project in C:\Users\Administrator\Desktop\微前端\monorepo\web\react-demo...
│
└  Done. Now run:

  cd react-demo
  npm install
  npm run dev
```

> 此时需要安装依赖，如果是npm则需要重复安装三次`main`、`vue-demo`、`react-demo`分别一次
>
> 此时使用`pnpm`进行安装

在根目录执行如下命令，并手动创建一个`pnpm-workspace.yaml`

```shell
PS C:\Users\Administrator\Desktop\微前端\monorepo> pnpm init 
Wrote to C:\Users\Administrator\Desktop\微前端\monorepo\package.json

{
  "name": "monorepo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "packageManager": "pnpm@10.6.5"
}
```

> pnpm-workspace.yaml

```yaml
packages:
  - 'main'
  - 'web/**'
```

> 在根目录执行一次`pnpm install`即可自动安装指定目录下的依赖
>
> 还有一个有意思的点是即使在根目录下，也能运行web目录下的子应用，通过`-F`参数过滤

```shell
PS C:\Users\Administrator\Desktop\微前端\monorepo> pnpm -F react-demo dev

> react-demo@0.0.0 dev C:\Users\Administrator\Desktop\微前端\monorepo\web\react-demo
> vite


  VITE v6.3.5  ready in 1354 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

> 新建一个common目录用于存放公共代码

```shell
PS C:\Users\Administrator\Desktop\微前端\monorepo> cd .\common\
PS C:\Users\Administrator\Desktop\微前端\monorepo\common> pnpm init
Wrote to C:\Users\Administrator\Desktop\微前端\monorepo\common\package.json

{
  "name": "common",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "packageManager": "pnpm@10.6.5"
}
```

> 在common目录下新建一个`index.js`作为示例

```javascript
export const a = 'test'
```

![image-20250520082518797](../../AppData/Roaming/Typora/typora-user-images/image-20250520082518797.png)

> 在`pnpm-workspace.yaml`新增一下common模块

```yaml
packages:
  - 'main'
  - 'web/**'
  - 'common'
```

> 在main目录下执行如下命令，为其添加common模块，就能使用request.js的代码了

```shell
pnpm -F main add common
```

> 可以看到packages.json里已经有了common的依赖

![image-20250520082548198](../../AppData/Roaming/Typora/typora-user-images/image-20250520082548198.png)

> 使用

![image-20250520082629147](../../AppData/Roaming/Typora/typora-user-images/image-20250520082629147.png)

![image-20250520082639160](../../AppData/Roaming/Typora/typora-user-images/image-20250520082639160.png)

## 无界

> [官方文档](https://wujie-micro.github.io/doc/guide/start.html)

```shell
# 主应用是vue3，这里下载wujie-vue3并引入
PS C:\Users\Administrator\Desktop\微前端\monorepo\main> pnpm install wujie-vue3
```

`main.ts`里引入即可

```ts
import App from './App.vue'
import Wujie from 'wujie-vue3'


const app = createApp(App)
app.use(Wujie)
app.mount('#app')
```

本地启动主应用和子应用

```shell
# 5174端口
pnpm -F main dev
# 5173端口
pnpm -F react-demo dev
# 5175端口
pnpm -F vue-demo dev
```

