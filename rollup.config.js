import resolve from "@rollup/plugin-node-resolve";
import {terser} from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
    input: 'src/app.ts',
    output: {file: 'bundle.js'},
    plugins: [
        typescript(),
        resolve({ browser: true }),
        terser(),
    ],
};