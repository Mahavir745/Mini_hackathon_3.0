import React, { useEffect, useState } from 'react'
import Slidebar from './component/Slidebar/Slidebar'
import "./App.css"
import { Outlet } from 'react-router-dom'

import { ConsentSDK } from '../hypercmp'

const App = () => {
  const [validToken,setValidToken] = useState(true)

  const HandleValid = ()=>{
    if(validToken){
      setValidToken(false)
    }
    else{
      setValidToken(true)
    }
  }
  // const [loading, setLoading] = useState(true) // Set loading to true initially
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   let sdk = new ConsentSDK("http://13.203.21.49:3000/v1")
  //   console.log(sdk)

  //   async function getConsent() {
  //     try {
  //       const data = await sdk.requestConsent(
  //         "sonna27",
  //         null,
  //         "http://13.203.21.49:3000/v1",
  //         "1.2",
  //         "hyperverg",
  //         "new learning",
  //         46,
  //         2
  //       )
  //       console.log(data) 
  //       setLoading(false) 
  //     } catch (err) {
  //       setLoading(false) 
  //       setError(err.message || "Something went wrong") 
  //     }
  //   }

  //   getConsent()
  // }, [])


  return (
    <div className='flex'>
      <Slidebar />
      {/* <div>
        {loading && <h1>Loading...</h1>}
        {error && <h1 className='text-red-500'>{error}</h1>}
      </div> */}
      <Outlet  context={{HandleValid,validToken} }/>
    </div>
  )
}

export default App
