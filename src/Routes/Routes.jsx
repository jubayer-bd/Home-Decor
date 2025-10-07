import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../Pages/Home/Home';
import Layout from '../Layouts/Layout';
import Products from '../Pages/Products/Products';
import Errorpage from '../Pages/ErrorPage/Errorpage';
import WishList from '../Pages/WishList/WishList';
import ProductDetail from '../Pages/ProductDetail/ProductDetail';

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
        
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path:'/wishList',
        element:<WishList/>
      },
      {
        path:'/products/:id',
        element:<ProductDetail/>
      }
    ],
  },
]);
export default router;
