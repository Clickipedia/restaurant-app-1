import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main/Main';
import Home from './components/Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
