---
title: 浏览器操作
titleTemplate: scrollProgressBar
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 计算浏览器页面已阅读的内容占整个页面的百分比。一般搭配`scroll`的监听事件使用。

## 1-函数引入

```js 
  import { scrollProgressBar } from 'tj-jstools'
```
## 2-函数声明
```ts
declare const scrollProgressBar: () => number;
```

## 3-使用示例

```js
document.addEventListener('scroll',function(){

  console.log(scrollProgressBar()) // 1 ~ 100

})
```

它的返回值范围在`0 ~ 100`，代表 `0%` 到 `100%` ， 只不过返回的是一个`number`类型的数值。
如果你需要的一个字符串可以进行如下操作：

```js
let progressStr = ''
document.addEventListener('scroll',function(){
  progressStr = scrollProgressBar() + '%';

  console.log(progressStr) // 0% ~ 100%

})
```
