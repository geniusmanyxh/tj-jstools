---
title: 浏览器操作
titleTemplate: openFull
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 开启浏览器全屏状态。

**注意：** 只有用户的主动行为才可以触发（任何鼠标事件任何键盘事件等等）,这是为了用户体验和用户的浏览安全。

::: details 警告详情

```js
Failed to execute 'requestFullscreen' on 'Element': API can only be initiated by a user gesture.
```
**意思大概是：在'Element'上执行'requestFullscreen'失败:API只能通过用户手势启动。**
:::

## 1-函数引入

```js 
  import { openFull } from 'tj-jstools'
```
## 2-函数声明
```ts
declare const openFull: (el?: Element, options?: FullscreenOptions) => Promise<void>;
```

## 3-使用示例

### 3.1- 简单使用

```html
  <button onclick="openFull()">openFullScreen</button>
```
以上是开启全屏示例，用户通过点击按钮触发该功能。<strong style="color:red">不能自动加载！</strong>

```html
<script>
  openFull()
</script>
```
如意思代码，表示自动打开全屏功能，但是浏览器并不会触发该功能，而是以下发出警告！
::: warning
Failed to execute 'requestFullscreen' on 'Element': API can only be initiated by a user gesture.
:::

### 3.2- 指定元素全屏
```html
 <div 
    id="fullId" 
    style="margin-top: 40px; width: 100%;height: 100px;background-color: red;"
  >
    测试元素
 </div>

 <button onclick="openFullOfEl()">openFullScreenOfEl</button>
```
指定元素开启全屏，需要将该元素作为参数传入`openFull`方法中，如以下代码：
```ts
function openFullOfEl() {
  const el:Element = document.getElementById('fullId');
  openFull(el)
}
```

### 3.3- 开启配置
```ts
function openFullOfEl() {
  const el:Element = document.getElementById('fullId');
  openFull(el,{navigationUI:'show'})
}
```
配置参数类型是一个JSON对象类型，目前只有`navigationUI`这一个选项。

## 4-OPTIONS配置详解

- navigationUI
该配置的默认值：`auto`, 可选值有 `auto`、`hide`、`show`三个选项。

详情参照MDN地址：[navigationUI](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen)