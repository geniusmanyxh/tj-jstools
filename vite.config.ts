/// <reference types="vitest" />
import { defineConfig, UserConfig } from "vite";

export const config = {
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
    coverage: {
      provider: "c8", // or 'c8',istanbul
      reporter: ["text", "json", "html"],
    },
  },
};

export default defineConfig(config as UserConfig);
