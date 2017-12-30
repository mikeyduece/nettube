import React, {Component} from 'react'
import SearchBox from '../SearchBox/SearchBox'
import Logout from '../Logout/Logout'
import './SideBar.css'

export default class SideBar extends Component {

  searchHandler(video) {
    this.props.search(video)
  }

  handleLogout() {
    this.props.logout()
  }

  render(){
    return(
      <nav className='naviagtion'>
        <ul className='mainmenu'>
        <div className='img-logout'>
          <img src={this.props.info.image} alt='Avatar' />
          <Logout handleLogout={this.handleLogout.bind(this)}/>
        </div>
        <SearchBox search={this.searchHandler.bind(this)}/>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="/favorites">favorites</a>
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
