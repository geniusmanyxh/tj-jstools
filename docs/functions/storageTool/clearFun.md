---
title: 浏览器缓存实例方法
titleTemplate: clearFun
---
# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】


**功能：** 一个可以批量清除的浏览器缓存(`localStorage`、`sessionStorage`、`Cookie`)的实例方法，该方法无返回值.

**参数：**
- `options:{prefix:'pre',...}`


## 1-创建缓存实例

```js
  import { newStorage } from 'tj-jstools'
  const Instance = newStorage('cookie',{prefix:'',...})
  // or
  const Instance = newStorage('local',{prefix:'',...})
  // or
  const Instance = newStorage('session',{prefix:'',...})
```

## 2-设置缓存测试值

```json
 "key": "test",
 "tj.key1":"test prefix",
 "tj@key2": "test linkSign",
 "tj@key3@tool": "test suffix"
```
## 3-具体使用
这里假设实例的配置属性全是初始值，未被更改。该方法与allKey方法使用方法一致。

### 3.1-简单使用
```ts
Instance.clearFun() // 默认清除所有缓存
Instance.allKey()
// []
```
### 3.2-清除特定前缀key对应的缓存
```ts
Instance.clearFun({prefix:'tj'})
Instance.allKey()
// ['key']
```
### 3.3-清除特定连接符号key对应的缓存
```ts
Instance.clearFun({prefix:'tj',linkSign:'@'})
Instance.allKey()
// ['key','tj.key1']

Instance.clearFun({linkSign:'@'})
Instance.allKey()
// ['key','tj.key1']

Instance.clearFun({linkSign:'.'})
Instance.allKey()
// ['key','tj@key2','tj@key3@tool']
```
::: warning 
对于clearFun方法来说,连接符号不需要依赖前缀或者后缀，它在此方法中可以独立配置且有效
:::

### 3.4-清除特定后缀key对应的缓存
```ts
Instance.clearFun({linkSign:'@',suffix:'tool'})
Instance.allKey()
// ['key','tj.key1','tj@key2']
```
我们可以通过配置参数来实现各种各样的筛选功能。

::: danger 
对于clearFun方法来说,初始化配置的属性对它无效，所以如果你要清除特定的key值缓存，请在该方法中单独配置属性，否则将清除所有该类别的缓存key值。
:::