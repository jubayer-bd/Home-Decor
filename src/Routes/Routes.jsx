import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../Pages/Home/Home';
import Layout from '../Layouts/Layout';
import Products from '../Pages/Products/Products';
import Errorpage from '../Pages/ErrorPage/Errorpage';
import WishList from '../Pages/WishList/WishList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Errorpage/>,
    hydrateFallbackElement: <p>Loading</p>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('./data.json'),
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path:'/wishList',
        element:<WishList/>
      }
    ],
  },
]);
export default router;
