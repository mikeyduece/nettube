import React, {Component} from 'react'
import './SideBar.css'

export default class SideBar extends Component {
  render(){
    return(
      <nav className='naviagtion'>
        <ul className='mainmenu'>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">favorites</a>
          </li>
          <li>
            <a href="">playlists</a>
              <ul className='submenu'>
              <li>
                <a href="">
                  <strong>list of lists</strong>
                </a>
              </li>
              </ul>
          </li>
          <li>
            <a href="">friends</a>
          </li>
        </ul>
      </nav>
    )
  }
}
