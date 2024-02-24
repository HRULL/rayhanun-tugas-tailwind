import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Tailwind from './App.jsx'
import './index.css'
import Home from './assets/components/Home/Home.jsx'




const router = createBrowserRouter ([

  {
    path:"/",
    element: <Home />,
  },

  {
    path:"/Tailwind",
    element: <Tailwind/>
  }





])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
