import {createBrowserRouter} from 'react-router-dom';

import Resume from '@pages/Resume';
import Test from '@pages/Test';
import App from './App';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        index: true,
        element: <Resume />,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
]);

export default router;
