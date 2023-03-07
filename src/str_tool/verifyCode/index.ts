/**
 *@description 写一个通用的随机字符串验证码
 */
type VerifyCodeType = "n" | "s" | "S";
type VerifyCodeFunc = (
  num: number,
  type?: VerifyCodeType | VerifyCodeType[]
) => string;

/**
 * @description 随机生成字符串的验证码
 * @param num 验证码位数
 * @param type 验证码字符选择区域
 * @returns 返回一个有固定长度的字符串
 */
const createRandomVerifyCode: VerifyCodeFunc = (num = 4, type) => {
  let _code = "";
  let _len = 4;
  let _rlen = 10;
  let _arr: string[] = [];
  const _s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const _n = "0123456789";

  // 判断是否传入了num参数
  if (num && typeof num === "number") {
    _len = num;
  } else {
    _len = 4;
  }

  // 判断是否传入了type参数
  if (type) {
    // 判断type是否是一个数组
    if (Object.prototype.toString.call(type) === "[object Array]") {
      if (type.length > 0) {
        (type as VerifyCodeType[]).forEach((val: VerifyCodeType) => {
          if (val === "n") {
            _arr = _arr.concat(_n.split(""));
          } else if (val === "s") {
            _arr = _arr.concat(_s.toLocaleLowerCase().split(""));
          } else {
            _arr = _arr.concat(_s.split(""));
          }
        });
      } else {
        // 如果是一个空数组，默认是数字数组，长度为默认的10
        _arr = _arr.concat(_n.split(""));
      }
    } else {
      if (type === "n") {
        _arr = _arr.concat(_n.split(""));
      } else if (type === "s") {
        _arr = _arr.concat(_s.toLocaleLowerCase().split(""));
      } else {
        _arr = _arr.concat(_s.split(""));
      }
    }

    // 重新赋值_rlen长度
    _rlen = _arr.length;
  } else {
    // 如果没有传入type参数，则默认是数字
    _arr = _arr.concat(_n.split(""));
  }

  for (let i = 0; i < _len; i++) {
    const idx = Math.floor(Math.random() * _rlen);
    _code += _arr[idx];
  }
  return _code;
};

export { createRandomVerifyCode };
