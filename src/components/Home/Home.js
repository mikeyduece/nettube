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

  getUsers() {
    let email = JSON.parse(localStorage.userData).email
    fetch('http://localhost:3000/api/v1/users/'+email+'/all_users')
    .then(response => response.json())
    .then(data => {
      this.parseUsers(data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  getFriendReqs() {
    let email = JSON.parse(localStorage.userData).email
    fetch('http://localhost:3000/api/v1/users/'+email+'/requests')
    .then(resp => resp.json())
    .then(data => {
      this.setFriendReqs(data)
    })
  }

  setFriendReqs(data) {
    this.setState({friendReqs: data})
  }

  componentWillMount(){
    this.getFriendReqs()
  }

  componentDidMount(){
    this.getUsers()
    this.getNames()
  }

  shouldComponentUpdate(nextState){
    if(this.state !== nextState){
      return true
    }
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

  parseUsers(data) {
    this.setState({users: data})
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
          getNames={this.getNames.bind(this)}
          videos={this.state.videos}
          users={this.state.users}
          addFriend={this.addFriend.bind(this)}
          friendReqs={this.state.friendReqs}/>

      </div>
    )
  }
}
