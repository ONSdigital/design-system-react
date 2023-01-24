import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import svgr from "@svgr/rollup";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/library.js",
    format: "cjs",
    sourcemap: true,
  },
  external: [ "react", "react-dom", "react/jsx-runtime" ],
  plugins: [
    svgr(),
    resolve(),
    typescript(),
  ],
};
