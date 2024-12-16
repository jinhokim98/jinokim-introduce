import {defineConfig, loadEnv} from 'vite';
import path from 'path';

import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  let branchName = env['VITE_BRANCH_NAME'];

  if (branchName === 'main' || branchName === 'develop') {
    branchName = '';
  }

  return {
    plugins: [react(), svgrPlugin()],
    base: branchName,
    resolve: {
      alias: [
        {find: '@assets', replacement: path.resolve(__dirname, 'src/assets')},
        {find: '@components', replacement: path.resolve(__dirname, 'src/components')},
        {find: '@constants', replacement: path.resolve(__dirname, 'src/constants')},
        {find: '@pages', replacement: path.resolve(__dirname, 'src/pages')},
        {find: '@styles', replacement: path.resolve(__dirname, 'src/styles')},
      ],
    },
  };
});
