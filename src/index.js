

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './Pages/backoffice/Home';
import SingIn from './Pages/backoffice/SingIn';
import Product from './Pages/backoffice/Product';



const router = createBrowserRouter([
  {
    path: '/',
    element: <SingIn />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/product',
    element: <Product />,  // ตรวจสอบว่าชื่อ path ตรงกับใน Link
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
