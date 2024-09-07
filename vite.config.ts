import {defineConfig} from 'vite';
import path from 'path';

import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  resolve: {
    alias: [
      {find: '@assets', replacement: path.resolve(__dirname, 'src/assets')},
      {find: '@components', replacement: path.resolve(__dirname, 'src/components')},
      {find: '@pages', replacement: path.resolve(__dirname, 'src/pages')},
      {find: '@styles', replacement: path.resolve(__dirname, 'src/styles')},
    ],
  },
});
