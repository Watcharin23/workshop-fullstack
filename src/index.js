import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import SingIn from './Pages/backoffice/SingIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SingIn />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);

