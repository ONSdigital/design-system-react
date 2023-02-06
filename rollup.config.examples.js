import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/example-selector.tsx",
  output: {
    file: `dist/design-system-react-examples.js`,
    format: "iife",
    sourcemap: true,
    globals: {
      react: "React",
    },
  },
  plugins: [
    replace({
      preventAssignment: true,
      "process.browser": true,
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    resolve({
      browser: true
    }),
    typescript(),
    commonjs({
      include: "node_modules/**"
    }),
    process.env.NODE_ENV === "production" ? terser() : null,
  ],
};
