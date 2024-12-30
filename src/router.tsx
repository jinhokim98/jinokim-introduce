import {createBrowserRouter} from 'react-router-dom';
import {lazy, Suspense} from 'react';
import App from './App';

const Resume = lazy(() => import('@pages/resume'));
const Test = lazy(() => import('@pages/test'));
const Feature1 = lazy(() => import('@pages/feature/Feature1'));

import ROUTER_URL from '@constants/routerUrl';
const envValue = import.meta.env.VITE_BRANCH_NAME;
const basename = typeof envValue !== 'undefined' ? '/' + envValue : '/';

const router = createBrowserRouter(
  [
    {
      path: ROUTER_URL.base,
      element: (
        <Suspense>
          <App />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: <Resume />,
        },
        {
          path: ROUTER_URL.test,
          element: <Test />,
        },
        {
          path: ROUTER_URL.feature,
          element: <Feature1 />,
        },
      ],
    },
  ],
  {basename},
);

export default router;
