import { describe, it, expect } from "vitest";

import { isFinite } from "../../static/esm";

describe("测试类型判断方法 ===> isFinite", () => {
  it("测试字符串", () => {
    expect(isFinite("")).toBeFalsy();
  });

  it("测试int", () => {
    expect(isFinite(10)).toBeTruthy();
  });

  it("测试NaN", () => {
    expect(isFinite(NaN)).toBeFalsy();
  });

  it("测试null", () => {
    expect(isFinite(null)).toBeFalsy();
  });

  it("测试undefined", () => {
    expect(isFinite(undefined)).toBeFalsy();
  });

  it("测试bigint", () => {
    expect(isFinite(10n)).toBeFalsy();
  });
  it("测试infinite", () => {
    expect(isFinite(1 / 0)).toBeFalsy();
  });

  it("测试finite", () => {
    expect(isFinite(0 / 1)).toBeTruthy();
  });
});
