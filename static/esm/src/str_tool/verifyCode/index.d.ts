/**
 *@description 写一个通用的随机字符串验证码
 */
declare type VerifyCodeType = "n" | "s" | "S";
declare type VerifyCodeFunc = (num: number, type?: VerifyCodeType | VerifyCodeType[]) => string;
/**
 * @description 随机生成字符串的验证码
 * @param num 验证码位数
 * @param type 验证码字符选择区域
 * @returns 返回一个有固定长度的字符串
 */
declare const createRandomVerifyCode: VerifyCodeFunc;
export { createRandomVerifyCode };
