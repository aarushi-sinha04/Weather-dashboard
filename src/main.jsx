import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, Route,  createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Weathercard from './components/weathercard.jsx'
import Home from './components/Home.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home/>} />
      <Route path="error" element={<Error/>} />
      <Route path="weather/:city" element={<Weathercard/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
