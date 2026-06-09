import React, { useState, useEffect } from 'react'
import Loader from './components/loader/Loader'
import Home from './components/Home'
const App = () => {

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])

  return (
    <>
      {loader ? <Loader /> : <Home />}
    </>
  )
}

export default App