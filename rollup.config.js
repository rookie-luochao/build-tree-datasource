import path from "path";
import babel from 'rollup-plugin-babel';
// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';

const pkg = require(path.join(process.cwd(), "package.json"));

export default {
    input: 'index.js',
    output: [
      {
        file: pkg.main,
        format: "cjs",
      },
      {
        file: pkg.module,
        format: "es",
      },
    ],
    plugins: [
      // resolve(),
      // commonjs(),
      babel({
        exclude: 'node_modules/**',
        extensions: [".js"],
        // babelrc: false,
        // presets: [['@babel/preset-env', { modules: false }]],
      })
    ]
}
