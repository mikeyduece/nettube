import React, {Component} from 'react'
import _ from 'lodash'
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

  getNames(){
    let email = JSON.parse(localStorage.userData).email
    fetch('http://localhost:3000/api/v1/users/' + email + '/playlist_names')
    .then(response => response.json())
    .then(data => {
      let newState = [...this.state.playlistNames, ...data]
      this.setState({playlistNames: newState})
      localStorage.setItem('newState', JSON.stringify(newState))
    })
  }

  componentDidMount(){
    this.getNames()
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
                  {this.state.playlistNames.map((name) =>
                    <li key={name}>
                      <Link  to={{pathname: '/playlist', state: {listName: name}}}>{name}</Link>
                    </li>
                  )
                  }
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
