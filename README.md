# electron_vue

electron 13 + vue 3 实现控制台有vue-devtools插件。（无其他页面，可这直接做脚手架）

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 常见错误
#### Electron Mac 打包报 Error: Exit code: ENOENT. spawn /usr/bin/python ENOENT 解决方法
```
打开 /node_modules/dmg-builder/out/dmg.js
将 "/usr/bin/python" 替换为 “python”
参考地址: https://www.cnblogs.com/willian/p/16996200.html
```
