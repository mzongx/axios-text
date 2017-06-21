# axios-test

> a simple test from axios

## 关于登录的流程

1.在login页登录的时候，根据用户名来设置token同时存到cookie，根据token来判断页面是否登录，当用户直接访问首页的时候，有token，就直接跳，说明登录过。若没有token，就返回登录页

## Build Setupf

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
