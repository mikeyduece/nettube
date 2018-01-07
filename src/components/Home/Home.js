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
      videos: [],
      playlistNames: [],
      users: [],
      friendReqs: [],
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

  handleSearch(video) {
    fetch(`http://localhost:3000/api/v1/search?q=${video}`)
      .then(response => response.json())
      .then((data) => {
        let compacted = _.compact(data)
        this.parseVideos(compacted)
      })
      .catch((err) =>{
        console.log(err)
      })
  }

  parseVideos(data) {
    this.setState({videos: data})
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
          search={this.handleSearch.bind(this)}
          names={this.state.playlistNames}
        />
        <Main
          name={this.state.playlistNames}
          videos={this.state.videos}
          users={this.props.users}
          addFriend={this.addFriend.bind(this)}
          friendReqs={this.props.friendReqs}/>

      </div>
    )
  }
}
