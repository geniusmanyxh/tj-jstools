---
title: 浏览器缓存实例方法
titleTemplate: allKey
---
# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 一个可以获取的浏览器缓存(`localStorage`、`sessionStorage`、`Cookie`)的全部key值标识实例方法，该方法一个字符串数组：`string[]`.

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
这里假设实例的配置属性全是初始值，未被更改。

### 3.1-简单使用
```ts
Instance.allKey()
// ['key','tj.key1','tj@key2','tj@key3@tool']
```
### 3.2-获取特定前缀key对应的缓存
```ts
Instance.allKey({prefix:'tj'})
// ['tj.key1']
```
### 3.3-获取特定连接符号key对应的缓存
```ts
Instance.allKey({prefix:'tj',linkSign:'@'})
// ['tj@key2','tj@key3@tool']

Instance.allKey({linkSign:'@'})
// ['tj@key2','tj@key3@tool']

Instance.allKey({linkSign:'.'})
// ['tj.key1']
```
::: warning 
对于allKey方法来说,连接符号不需要依赖前缀或者后缀，它在此方法中可以独立配置且有效
:::

### 3.4-获取特定后缀key对应的缓存
```ts
Instance.allKey({prefix:'tj',linkSign:'@',suffix:'tool'})
// ['tj@key3@tool']
```
我们可以通过配置参数来实现各种各样的筛选功能。

::: danger 
对于allKey方法来说,初始化配置的属性对它无效，所以如果你要筛选特定的key值，请在该方法中单独配置属性，否则将获取所有该类别的缓存key值。
:::