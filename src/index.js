import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Component/Home";
import Project from "./Component/Project";
import Language from "./Component/Language";
import Aboutus from "./Component/Aboutus";
import Contactus from "./Component/Contactus";
import Certification from "./Component/Certification";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // 🔥 header/footer auto
    children: [
      { path: "/", element: <Home /> },
      { path: "/project", element: <Project /> },
      { path: "/language", element: <Language /> },
      { path: "/about", element: <Aboutus /> },
      { path: "/contact", element: <Contactus /> },
      { path: "/certification", element: <Certification /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
