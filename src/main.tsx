import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.js'
import Register from './Pages/Register.js'
import House from './Pages/House.js'
import Denuntiation from './Pages/Denunciation.js'
import Empresa from './Pages/Empresa.js'
import DenunciasHechas from './Pages/DenunciasHechas.tsx'
import Lugares from './Pages/Lugares.tsx'
import HouseAdmin from './Pages/HouseAdmin.tsx'
import { Buffer } from 'buffer';



const router= createBrowserRouter ([
  {
    path: "/",
    element: <Home/> 
  },
  {
    path: "/Register",
    element: <Register/>
  },
  {
    path: "/House",
    element: <House/>
  },
  {
    path: "/HouseAdmin",
    element: <HouseAdmin></HouseAdmin>
  },
  {
    path: "/Register",
    element: <Register/>
  },
  {
    path: "/Denuntation",
    element: <Denuntiation/>
  },
  {
    path: "/Empresa",
    element: <Empresa/>
  },
  {
    path: "Denuncias",
    element: <DenunciasHechas></DenunciasHechas>
  },
  {
    path: "Lugares",
    element: <Lugares></Lugares>
  }
])

window.Buffer = Buffer;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
);
