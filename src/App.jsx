import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, Route,  createRoutesFromElements} from 'react-router-dom'
import Weathercard from '../src/components/Weathercard.jsx'
import Home from '../src/components/Home.jsx'
import Error from '../src/components/Error.jsx'

const router = createBrowserRouter(createRoutesFromElements(
    // <Route path="/" element={<Layout />}>
  <Route>
      <Route path="/" element={<Home/>} />
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
