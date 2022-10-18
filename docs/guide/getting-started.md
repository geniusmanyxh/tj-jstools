

# 快速上手

## 安装依赖

**npm方式**
```sh
npm install tj-jstools
```

**浏览器方式**
- [jsdelivr的umd格式地址](https://cdn.jsdelivr.net/npm/tj-jstools@1.2.1/static/umd/index.js)
```js
<script src="https://cdn.jsdelivr.net/npm/tj-jstools@1.2.1/static/umd/index.js"></script>
<script>
  const {_tj} = window
  console.log(_tj);
</script>
```
引入后，查看全局变量中的`window._tj`对象，里面包含了所有工具函数。