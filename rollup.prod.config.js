import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.ts", // 修改为 TypeScript 文件
  output: [
    {
      file: "dist/hundun-ui-library-react.umd.js",
      format: "umd",
      name: "MyComponentLibrary",
    },
    {
      file: "dist/hundun-ui-library-react.cjs.js",
      format: "cjs",
      exports: "named",
    },
    {
      dir: "dist", // 指定输出目录为dist
      format: "esm", // 选择输出格式
      preserveModules: true, // 保留模块结构
      preserveModulesRoot: "src", // 指定保留模块结构的根目录
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json", // 指定 TypeScript 配置文件
    }),
    babel({
      babelHelpers: "bundled", // 使用 Rollup 打包 Babel
      exclude: "node_modules/**", // 排除 node_modules 目录
      extensions: [".js", ".jsx", ".ts", ".tsx"], // 配置支持的文件后缀
      presets: [
        "@babel/preset-env", // 预设环境
        "@babel/preset-react", // 预设 React
        "@babel/preset-typescript", // 预设 TypeScript
      ],
    }),
    postcss({
      extract: "hundun-ui-library-react.css",
      plugins: [autoprefixer(), cssnano()],
    }),
  ],
  external: [
    "react",
    "react-dom",
    "antd",
    "@ant-design",
    "@rc-component",
    "@babel/runtime",
    'copy-to-clipboard',
    "@ctrl/tinycolor",
    "classnames",
    "dayjs",
    "qrcode.react",
    "scroll-into-view-if-needed",
    "throttle-debounce",
    "/^rc-/",
  ],
};
