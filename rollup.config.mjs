import stylexPlugin from '@stylexjs/rollup-plugin';
import { babel } from '@rollup/plugin-babel';

import { resolve } from 'path';

const config = {
  input: './style/index.ts',
  output: {
    file: './.build/index.js',
    format: 'es',
  },
  // Ensure that the stylex plugin is used before Babel
  plugins: [
    stylexPlugin({ fileName: 'stylex.css' })
  ],
};

export default config;