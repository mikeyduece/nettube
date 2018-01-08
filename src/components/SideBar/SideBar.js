import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox'
import Logout from '../Logout/Logout'
import './SideBar.css'

export default class SideBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      playlistNames: [],
    }
  }

  shouldComponentUpdate(nextState) {
    if(this.state !== nextState){
      return true
    }
  }

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites" >Favorites</Link>
          </li>
          <li>
              <a href="">Playlists</a>
                <ul className='submenu'>
                  {this.props.names.map((name) =>
                    <li key={name}>
                      <Link  to={{pathname: '/playlist', state: {listName: name}}}>{name}</Link>
                    </li>
                  )
                  }
                </ul>
            </li>
            <li>
              <a href="">Friends</a>
            </li>
            <li>
              <a href="">Incoming Friend Requests</a>
                <ul className='req-submenu'>
                  {this.props.incoming.map(user =>
                    <li>
                      <a href="">
                        <div className='incoming-user-req'>
                          <div className='email' hidden='true'>{user.email}</div>
                          <img className='user-img-dropdown' src={user.image}/>
                          <p className='user-name-dropdown'>{user.name}</p>
                          <i onClick={this.props.accept} className="fa fa-thumbs-up" aria-hidden="true"></i>
                          <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                        </div>
                      </a>
                    </li>
                  )}
                </ul>
            </li>
          </ul>
        </nav>
      )
    }
}
