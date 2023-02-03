import { describe, it, expect } from "vitest";

import { isString } from "../../static/esm";

describe("测试类型判断方法 ===> isString", () => {
  it("测试字符串", () => {
    expect(isString("")).toBeTruthy();
    expect(isString("hello")).toBeTruthy();
  });

  it("测试number", () => {
    expect(isString(0)).toBeFalsy();
    expect(isString(1)).toBeFalsy();
  });

  it("测试null", () => {
    expect(isString(null)).toBeFalsy();
  });

  it("测试undefined", () => {
    expect(isString(undefined)).toBeFalsy();
  });

  it("测试NaN", () => {
    expect(isString(NaN)).toBeFalsy();
  });
});
