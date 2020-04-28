//Dependencies
import './SideNav.scss'
import React from 'react'
import { useSelector } from "react-redux";

const SideNav = () => {
  const { isSignedIn } = useSelector(state => state.auth)

  const renderMenu = () => {
    if (isSignedIn) {
      return (
        <div className="sidenav page">
          <header tabIndex="0">Header</header>
          <div id="nav-container">
            <div className="bg"/>
            <div className="button" tabIndex="0">
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </div>
            <div id="nav-content" tabIndex="0">
              <ul>
                <li><a href="#0">Home</a></li>
                <li><a href="#0">Services</a></li>
                <li><a href="#0">Blog</a></li>
                <li><a href="#0">About</a></li>
                <li><a href="#0">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  return renderMenu()
}

export default SideNav