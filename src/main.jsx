import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";

import LandingPage from './views/LandingPage';
import LoadingPage from './views/LoadingPage';
import NewRecipe from './views/NewRecipe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "loading",
    element: <LoadingPage/>
  },
  {
    path: "new_recipe",
    element: <NewRecipe/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
