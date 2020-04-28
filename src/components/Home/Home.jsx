//Dependencies
import './Home.scss'
import React from 'react'
import SideNav from "../SideNav/SideNav"

const Home = () => {
  return (
    <div className='home'>
      <div id='sidenav'>
        <SideNav />
      </div>
      <div id='home'>
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home