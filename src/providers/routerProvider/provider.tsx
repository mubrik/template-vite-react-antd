import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from '../../App';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const RootRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default RootRouterProvider;
