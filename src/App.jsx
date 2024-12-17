import React from 'react'
import Slidebar from './component/Slidebar/Slidebar'
import InputField from './component/Home/InputField'
import "./App.css"
import Policy from './component/Home/Policy'
import Token from './component/Home/Token'
import { Outlet } from 'react-router-dom'

const App = () => {
  
  return (
    <div className='flex'>
      <Slidebar/>
      <div>
     <Outlet/>
      </div>
    </div>
  )
}

export default App