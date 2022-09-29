// 导入依赖
const { terser } = require('rollup-plugin-terser')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('rollup-plugin-typescript2')
import { nodeResolve } from '@rollup/plugin-node-resolve';
// const babel = require('@rollup/plugin-babel') // 导入babel
import babel from '@rollup/plugin-babel'; 

// tsconfig.json合并选项
// 一般来说默认使用项目的tsconfig.json，如果有个别需要修改的如下，可以在此修改
const override = { compilerOptions: { module: 'ESNext' } }

module.exports = {
  // 项目入口
  input: 'src/index.ts',
  // 打包后的出口和设置
  // output: {
  //   file: 'static/app.min.js',
  //   format: 'cjs',
  //   sourcemap: true,
  //   exports: 'default',
  // },
  // external: [ 'Cookies' ],
  output: [
    {
      file: 'static/cjs/index.js', // 打包成commonjs
      format: 'cjs',
      sourcemap: true,
      // globals: {
      //   'Cookies': 'Cookies'
      // },
      // external: ['Cookies']
      // exports: 'default',
    },
    {
      file: 'static/esm/index.js', // 打包成esmodule
      format: 'esm',
      sourcemap: true,
      // globals: {
      //   'Cookies': 'Cookies'
      // },
      // external: ['Cookies']
      // exports: 'default',
    },
    {
      file: 'static/umd/index.js',
      format: 'umd',
      sourcemap: true,
      // globals: {
      //   'Cookies': 'Cookies'
      // },
      // exports: 'default',
      name: '_tj' // umd 规范，一定要有一个名字，不然打包报错
    },
  ],
  // 使用的插件
  // 注意，这里的插件使用是有顺序的，先把ts编译为js，然后查找依赖，最后压缩
  plugins: [
    typescript({ tsconfig: './tsconfig.json', tsconfigOverride: override }),
    nodeResolve(),
    babel({
      exclude: 'node_modules/**', // 防止打包node_modules下的文件
      babelHelpers: 'runtime',      // 使plugin-transform-runtime生效
      // 使用预设
      presets: [['@babel/preset-env', {
        "modules": false,
        "useBuiltIns": "usage",
        // 目标浏览器
        "targets": {
          "edge": '17',
          "firefox": '60',
          "chrome": '67',
          "safari": '11.1',
          'ie': '10',
        },
      }]],
      plugins: [
        //  多次导入的文件，只导入一次
        ['@babel/plugin-transform-runtime']],
    }),
   commonjs(), 
   terser()
  ],
}