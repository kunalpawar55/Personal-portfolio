import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Project from './Project';
import Footer from './Footer';
import Language from './Language';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Certification from './Certification';
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from './Start/Start';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rout=createBrowserRouter([
 {
  path:'/',
  element:<Start/>

 },
  {
    path:'/Home',
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
  
])
root.render(
  <React.StrictMode>
    <RouterProvider router={rout}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
