---
title: 字符串操作
titleTemplate: createRandomVerifyCode
---

# 【{{ $frontmatter.title }} —— {{$frontmatter.titleTemplate}}】

**功能：** 生成一个有长度的随机字符串验证码。

## 1-函数引入

```js 
  import { createRandomVerifyCode } from 'tj-jstools'
```
## 2-函数声明
```ts
declare type VerifyCodeType = "n" | "s" | "S";
declare type VerifyCodeFunc = (num: number, type?: VerifyCodeType | VerifyCodeType[]) => string;
/**
 * @description 随机生成字符串的验证码
 * @param num 验证码位数
 * @param type 验证码字符选择区域
 * @returns 返回一个有固定长度的字符串
 */
declare const createRandomVerifyCode: VerifyCodeFunc;
```

## 3-使用示例

```ts
 const code:strig = createRandomVerifyCode()

// 1653
```
默认生成的是全部由数字生成的长度为4的字符串验证码。

```ts
 const code:strig = createRandomVerifyCode(6)

// 208447
```
你可以传入一个大于零的长度的数字，他可以生成一个该长度的随机字符串。

```ts
const code:strig = createRandomVerifyCode(6, "S")

// YEDPSP
```
你也可以更改字符串的选择范围：

- S ===> 代表大写的26个英文字母
- s ===> 代表小写的26个英文字母
- n ===> 代表0-9的数字
- ["S", "s"] ===> 代表26个大写和小写的英文字母
- ["S", "n"] ===> 代表26个大写英文字母和0-9的数字
- ["s", "n"] ===> 代表26个小写英文字母和0-9的数字
- ["S", "s", "n"] ===> 代表26个大小写英文字母和0-9的数字

```ts
const code:strig = createRandomVerifyCode(6, "S")
// YEDPSP

const code:strig = createRandomVerifyCode(6, "S")
// svideu

const code:strig = createRandomVerifyCode(6, ["S", "s", "n"])
// p3ozUd
```

## 4-参数说明

- 参数1：`num` ：验证码位数，需要大于零
- 参数2：`type` ：验证码字符串选择区域，可以是：`"S"` | `"s"` | `"n"` | `["S", "s"]` | `["S", "n"]` | `["s", "n"]` | `["S", "s", "n"]`。