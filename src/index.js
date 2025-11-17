import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home';
import Project from './Component/Project';
import Language from './Component/Language';
import Aboutus from './Component/Aboutus';
import Contactus from './Component/Contactus';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cursor from './CSS/Cursor';
import Certification from './Component/Certification';
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/project',
      element: <Project />,
    },
    {
      path: '/language',
      element: <Language />,
    },
    {
      path: '/about',
      element: <Aboutus />,
    },
    {
      path: '/contact', 
      element: <Contactus />,
    },
    {
      path: '/cursor',
      element: <Cursor />,
    },
    {
      path: '/certification',
      element:<Certification/> ,
    }
  ],
  {
    basename: '/', 
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
