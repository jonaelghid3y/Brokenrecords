import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import Products from './pages/Products'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import CreateProduct from './pages/admin/CreateProduct'
import ManageProducts from './pages/admin/ManageProducts'
import UpdateProduct from './pages/admin/UpdateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    
    children: [
      {
        path: "/",
        element: < Products/>,
      },
      {
        path: "/Product",
        element: <Product />,
      },
      {
        path: "/Checkout",
        element: <Checkout/>,
      },
      {
        path: "/CreateProduct",
        element: <CreateProduct/>,
      },
      {
        path: "/ManageProducts",
        element: <ManageProducts/>,
      },
      {
        path: "/UpdateProduct/:id",
        element: <UpdateProduct/>,
      },
    
    ]
  },
 
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
