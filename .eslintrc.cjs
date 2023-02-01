module.exports = {
  // 使用typescript解析器
  parser: '@typescript-eslint/parser',
  // 不同的解析器parser，parserOptions的值不相同，具体参考对应解析器文档
  parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
      node: true,
      jest: true,
  },
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
  },
};