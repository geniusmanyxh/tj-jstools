import { paramsNullError } from "../../common/paramUtils";

function isNumType(name: string, type: string) {
  return function (value: unknown): boolean {
    if (arguments.length === 0) {
      paramsNullError(`is${name}方法的`);
    }
    const flag = typeof value === "number";
    return flag && Number[`is${type}`](value);
  };
}

function isFloat(params: unknown): boolean {
  if (arguments.length === 0) {
    paramsNullError(`isFloat方法的`);
  }
  const flag = typeof params === "number";
  const y = String(params).indexOf(".") + 1; // 获取小数点后的个数

  return flag && y > 0;
}

function isInfinite(params: unknown): boolean {
  if (arguments.length === 0) {
    paramsNullError(`isInfinite方法的`);
  }
  const flag = typeof params === "number";
  return flag && !Number.isFinite(params) && !Number.isNaN(params);
}

const isInt = isNumType("Int", "Integer");
const isFinite = isNumType("Finite", "Finite");
const isNaN = isNumType("NaN", "NaN");

export { isFloat, isInt, isFinite, isNaN, isInfinite };
