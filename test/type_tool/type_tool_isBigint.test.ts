import { describe, it, expect } from "vitest";

import { isBigint } from "../../static/esm";

describe("测试类型判断方法 ===> isBigint", () => {
  it("测试字符串", () => {
    expect(isBigint("")).toBeFalsy();
  });

  it("测试int", () => {
    expect(isBigint(10)).toBeFalsy();
  });

  it("测试float", () => {
    expect(isBigint(10.9)).toBeFalsy();
  });

  it("测试infinite", () => {
    expect(isBigint(1 / 0)).toBeFalsy();
  });

  it("测试finite", () => {
    expect(isBigint(0 / 1)).toBeFalsy();
  });

  it("测试NaN", () => {
    expect(isBigint(NaN)).toBeFalsy();
  });

  it("测试null", () => {
    expect(isBigint(null)).toBeFalsy();
  });

  it("测试undefined", () => {
    expect(isBigint(undefined)).toBeFalsy();
  });

  it("测试bigint", () => {
    expect(isBigint(10n)).toBeTruthy();
  });
});
