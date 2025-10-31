import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import eslint from 'vite-plugin-eslint';

// postcss plugins
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';
import postcssAutoprefixer from 'autoprefixer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  css: {
    postcss: {
      // prettier-ignore
      plugins: [
        postcssNested(),
        postcssImport(),
        postcssAutoprefixer()
      ],
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
});
