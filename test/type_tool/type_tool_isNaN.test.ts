import { describe, it, expect } from "vitest";

import { isNaN } from "../../static/esm";

describe("测试类型判断方法 ===> isNaN", () => {
  it("测试字符串", () => {
    expect(isNaN("")).toBeFalsy();
  });

  it("测试int", () => {
    expect(isNaN(10)).toBeFalsy();
  });

  it("测试float", () => {
    expect(isNaN(10.9)).toBeFalsy();
  });

  it("测试infinite", () => {
    expect(isNaN(1 / 0)).toBeFalsy();
  });

  it("测试finite", () => {
    expect(isNaN(0 / 1)).toBeFalsy();
  });

  it("测试NaN", () => {
    expect(isNaN(NaN)).toBeTruthy();
  });

  it("测试null", () => {
    expect(isNaN(null)).toBeFalsy();
  });

  it("测试undefined", () => {
    expect(isNaN(undefined)).toBeFalsy();
  });

  it("测试bigint", () => {
    expect(isNaN(10n)).toBeFalsy();
  });
});
