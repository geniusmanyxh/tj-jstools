---
title: 浏览器缓存
titleTemplate: newStorage
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 生成一个可以操作的浏览器缓存实例：`localStorage`、`sessionStorage`、`Cookie`

**参数：** 
- `type: 'local' | 'session' | 'cookie'`
- `options:{prefix:'pre',...}`

**实例方法：** 每个实例都有5个功能相同的方法: `setFun`、`getFun`、`delFun`、`existFun`、`allKey`、`clearFun`

## 1-函数引入

```js 
  import { newStorage } from 'tj-jstools'
```

## 2-函数声明

```ts 
type StorageType = 'cookie' | 'local' | 'session';
function newStorage(type: StorageType, options?: IComCookieBasicProp): ComStorage;
```
::: details 详细的类型声明
```ts
declare type UnitTimeType = 'ms' | 's' | 'min' | 'h' | 'd' | 'w' | 'm' | 'y';
declare type StorageType = 'cookie' | 'local' | 'session';
interface IComStorageBasicProp {
    prefix?: string;
    suffix?: string;
    linkSign?: string;
}
interface IComStorageSetProp extends IComStorageBasicProp {
    expireTime?: number;
    unitTime?: UnitTimeType;
}
interface IComCookieBasicProp extends IComStorageSetProp {
    expires?: number | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'Strict' | 'lax' | 'Lax' | 'none' | 'None' | undefined;
    [property: string]: any;
}
interface IComStorageFun {
    setFun(key: string, value: any, options?: IComStorageSetProp | IComCookieBasicProp): void;
    getFun(key: string, options?: IComStorageBasicProp | IComCookieBasicProp): any;
    delFun(key: string, options?: IComStorageBasicProp | IComCookieBasicProp): void;
    existFun(key: string, options?: IComStorageBasicProp | IComCookieBasicProp): boolean;
    allKey(options?: IComStorageBasicProp | IComCookieBasicProp): string[];
    clearFun(options?: IComStorageBasicProp | IComCookieBasicProp): void;
}
declare class ComStorage implements IComStorageFun {
    private instanceType;
    private prefix;
    private suffix;
    private linkSign;
    private expireTime;
    private unitTime;
    private expires;
    private path;
    private domain;
    private secure;
    private sameSite;
    constructor(type: StorageType, options?: IComStorageSetProp | IComCookieBasicProp | undefined);
    setFun(key: string, value: any, options?: IComStorageSetProp | IComCookieBasicProp | undefined): void;
    getFun(key: string, options?: IComStorageBasicProp | IComCookieBasicProp | undefined): any;
    delFun(key: string, options?: IComStorageBasicProp | IComCookieBasicProp | undefined): void;
    existFun(key: string, options?: IComStorageBasicProp | IComCookieBasicProp | undefined): boolean;
    allKey(options?: IComStorageBasicProp | undefined): string[];
    clearFun(options?: IComStorageBasicProp | IComCookieBasicProp | undefined): void;
}
declare function newStorage(type: StorageType, options?: IComCookieBasicProp): ComStorage;
```
:::

## 3-使用示例
```ts
import {newStorage} from 'tj-jstools'
const Coptions = {
  prefix:'tj',
  linkSign: '@',
  suffix:'jstools',
  expireTime: 2,
  unitTime: 'd'
}
const CInstance = newStorage('cookie',Coptions)

CInstance.setFun('test','testValue')
// tj@test@jstools: testValue ; 过期时间：2天
```
以上案例，设置了一个key为`tj@test@jstools`,值为`'testValue'`,过期时间`2天`的cookie值。
如果你有个别缓存有其他的需求，你可以在setFun方法里面单独配置属性，它会覆盖初始化的配置

```ts
CInstance.setFun('newTest','testValue',
{suffix:'com',expireTime:10,unitTime:'h'})
// tj@newTest@com: testValue ; 过期时间：10小时
```
以上案例，在setFun方法里面配置了options参数，它会覆盖初始化的配置，所以这里是设置了一个
key为`tj@newTest@com`,值为`'testValue'`,过期时间为10个小时的cookie值。

## 4-配置参数options详解

### 公共配置：
**这里指localStorage、sessionStorage、cookie实例共有的配置属性**
- prefix：默认值：`''`, key值的前缀
- linkSign：默认值：`.`,前缀后缀与key值的连接符号
- suffix：默认值：`''`,key值的后缀
- expireTime:默认值：-1, 如果需要一个有效的过期时间，请设置一个大于0的int型数值
- UnitTime:默认值：`ms`,可选：`'ms(毫秒)'、's(秒)'、'min(分)'、'h(时)'、'd(天)'、'w(周=7天)'、'm(月=30天)'、'y(年=365天)'`

### Cookie配置：
**这里指cookie独有的配置，对localStorage、sessionStorage无效**
- expires：默认值：`undefined`,如果没有定义，cookie 会在对话结束时过期,
- path: 默认值：`/`,
- domain：默认值：`undefined`,(例如 'example.com'， 'subdomain.example.com') 如果没有定义，默认为当前文档位置的路径的域名部分,
- secure：默认值：`false`,(cookie 只通过 https 协议传输),
- sameSite：默认值：`Lax`,[查看详情地址](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
- [具体参见`js-cookie`库文档](https://github.com/js-cookie/js-cookie#readme)
- [辅助参见MDN:`Document.cookie`地址](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie#%E4%B8%80%E4%B8%AA%E5%B0%8F%E6%A1%86%E6%9E%B6%EF%BC%9A%E4%B8%80%E4%B8%AA%E5%AE%8C%E6%95%B4%E6%94%AF%E6%8C%81_unicode_%E7%9A%84_cookie_%E8%AF%BB%E5%8F%96%E5%86%99%E5%85%A5%E5%99%A8)