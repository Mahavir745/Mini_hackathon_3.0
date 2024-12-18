import React from 'react'
import Slidebar from './component/Slidebar/Slidebar'
import "./App.css"
import { Outlet } from 'react-router-dom'
// import { ConsentSDK } from '../hypercmp'

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