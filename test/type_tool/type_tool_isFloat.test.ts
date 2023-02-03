import { describe, it, expect } from "vitest";

import { isFloat } from "../../static/esm";

describe("测试类型判断方法 ===> isFloat", () => {
  it("测试字符串", () => {
    expect(isFloat("")).toBeFalsy();
  });

  it("测试int", () => {
    expect(isFloat(10)).toBeFalsy();
  });

  it("测试float", () => {
    expect(isFloat(10.9)).toBeTruthy();
  });

  it("测试infinite", () => {
    expect(isFloat(1 / 0)).toBeFalsy();
  });

  it("测试finite", () => {
    expect(isFloat(0 / 1)).toBeFalsy();
  });

  it("测试NaN", () => {
    expect(isFloat(NaN)).toBeFalsy();
  });

  it("测试null", () => {
    expect(isFloat(null)).toBeFalsy();
  });

  it("测试undefined", () => {
    expect(isFloat(undefined)).toBeFalsy();
  });

  it("测试bigint", () => {
    expect(isFloat(10n)).toBeFalsy();
  });
});
