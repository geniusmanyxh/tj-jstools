import { describe, it, expect } from "vitest";

// import { isBoolean } from "tj-jstools";
import { isBoolean } from "../../static/esm";

describe("测试类型判断方法 ===> isBoolean", () => {
  it("判断字符串", () => {
    const res = isBoolean("str");
    expect(res).toBe(false);
  });

  it("判断数字", () => {
    const res = isBoolean(1);
    expect(res).toBe(false);
  });

  it("判断null", () => {
    const res = isBoolean(null);
    expect(res).toBe(false);
  });

  it("判断undefined", () => {
    const res = isBoolean(undefined);
    expect(res).toBe(false);
  });

  it("判断NaN", () => {
    const res = isBoolean(NaN);
    expect(res).toBe(false);
  });

  it("判断object", () => {
    const res = isBoolean({ a: 1 });
    expect(res).toBe(false);
  });

  it("判断func", () => {
    const res = isBoolean(() => {});
    expect(res).toBe(false);
  });

  it("判断boolean", () => {
    const res = isBoolean(true);
    const res1 = isBoolean(false);

    expect(res).toBe(true);
    expect(res1).toBe(true);
  });

  it("判断infinite", () => {
    const res = isBoolean(1 / 0);
    const res1 = isBoolean(0 / 1);

    expect(res).toBe(false);
    expect(res1).toBe(false);
  });

  it("判断Bigint", () => {
    const res = isBoolean(10n);

    expect(res).toBe(false);
  });

  it("判断float", () => {
    const res = isBoolean(10.5);

    expect(res).toBe(false);
  });

  it("判断Array", () => {
    const res = isBoolean([]);

    expect(res).toBe(false);
  });

  it("判断symbol", () => {
    const res = isBoolean(Symbol("js"));

    expect(res).toBe(false);
  });

  it("判断Date", () => {
    const res = isBoolean(new Date());

    expect(res).toBe(false);
  });
});
