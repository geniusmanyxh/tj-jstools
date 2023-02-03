import { describe, it, expect } from "vitest";

import { isNumber } from "../../static/esm";

describe("测试类型判断方法 ===> isNumber", () => {
  it("测试字符串", () => {
    expect(isNumber("")).toBeFalsy();
  });

  it("测试int", () => {
    expect(isNumber(10)).toBeTruthy();
  });

  it("测试float", () => {
    expect(isNumber(10.9)).toBeTruthy();
  });

  it("测试infinite", () => {
    expect(isNumber(1 / 0)).toBeTruthy();
  });

  it("测试finite", () => {
    expect(isNumber(0 / 1)).toBeTruthy();
  });

  it("测试NaN", () => {
    expect(isNumber(NaN)).toBeTruthy();
  });

  it("测试null", () => {
    expect(isNumber(null)).toBeFalsy();
  });

  it("测试undefined", () => {
    expect(isNumber(undefined)).toBeFalsy();
  });
});
