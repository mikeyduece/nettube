import './App.scss'
//Dependencies
import React from 'react'
import { useSelector } from "react-redux";

import GoogleAuth from "../Auth/GoogleAuth";
import Home from "../Home/Home";

const App = () => {
  const { isSignedIn } = useSelector(state => state.auth)

  const renderApp = () => {
    if (isSignedIn) {
      return <Home/>
    } else {
      return (
          <div className='app'>
            <h1 id='logo'>netTube</h1>
            <GoogleAuth/>
          </div>
      )
    }
  }

  return (
      <>
        { renderApp() }
      </>
  )
}


export default App

