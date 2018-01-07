import React, {Component} from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Main from '../Main/Main'
import _ from 'lodash'
import './Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: JSON.parse(props.deets),
      playlistNames: [],
    }
  }

  addFriend(e) {
    let email = JSON.parse(localStorage.userData).email
    let friend_email = e.target.closest('div[class=user-card]').children[0].textContent
    let tokenId = JSON.parse(localStorage.userData).token
    fetch('http://localhost:3000/api/v1/users/'+email+'/add_friend/'+friend_email,{
      method: 'POST',
      headers: {
        "HTTP_AUTHORIZATION": `${tokenId}`,
        'Authorization': tokenId,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(friend_email)

    })
  }

  handleLogout() {
    this.props.logout()
  }

  handleToken() {
    if(this.state.token !== this.props.token){
      this.logout()
    }
  }

  render(){
    return(
      <div>
        <SideBar
          info={this.state.info}
          logout={this.handleLogout.bind(this)}
          search={this.props.search}
          names={this.state.playlistNames}
        />
        <Main
          name={this.state.playlistNames}
          videos={this.props.videos}
          users={this.props.users}
          addFriend={this.addFriend.bind(this)}
          friendReqs={this.props.friendReqs}/>

      </div>
    )
  }
}
