import {defineConfig} from 'vite';
import path from 'path';

import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  resolve: {
    alias: [
      {find: '@assets', replacement: path.resolve(__dirname, 'src/assets')},
      {find: '@components', replacement: path.resolve(__dirname, 'src/components')},
      {find: '@constants', replacement: path.resolve(__dirname, 'src/constants')},
      {find: '@styles', replacement: path.resolve(__dirname, 'src/styles')},
    ],
  },
});
