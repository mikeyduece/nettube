import React, {Component} from 'react'
import SearchBox from '../SearchBox/SearchBox'
import './SideBar.css'

export default class SideBar extends Component {

  render(){
    return(
      <nav className='naviagtion'>
        <ul className='mainmenu'>
        <SearchBox image={this.props.info.image}/>
        <input type='text' />
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
