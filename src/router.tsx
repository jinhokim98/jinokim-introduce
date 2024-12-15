import {createBrowserRouter} from 'react-router-dom';

import Resume from '@pages/resume';
import Test from '@pages/test';
import App from './App';
import ROUTER_URL from '@constants/routerUrl';

const envValue = import.meta.env.VITE_BRANCH_NAME;
const basename = typeof envValue !== 'undefined' ? envValue : '';

const router = createBrowserRouter(
  [
    {
      path: ROUTER_URL.base,
      element: <App />,
      children: [
        {
          index: true,
          element: <Resume />,
        },
        {
          path: ROUTER_URL.test,
          element: <Test />,
        },
      ],
    },
  ],
  {basename},
);

export default router;
