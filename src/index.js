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


const root = ReactDOM.createRoot(document.getElementById('root'));
let rout=createBrowserRouter([
 
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Project',
    element:<Project/>
  },
  {
    path:'/Language',
    element:<Language/>
  },
  {
    path:'/About',
    element:<Aboutus/>
  },
  {
    path:'/contect',
    element:<Contactus/>
  },
  {
    path:'/cursor',
    element:<Cursor/>
  },
  
])
root.render(
  <React.StrictMode>
    <RouterProvider router={rout}/>
  </React.StrictMode>
);


reportWebVitals();
