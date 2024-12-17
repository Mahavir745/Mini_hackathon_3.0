import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import InputField from './component/Home/InputField.jsx'
import Policy from './component/Home/Policy.jsx'
import Token from './component/Home/Token.jsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<InputField/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/token' element={<Token/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
