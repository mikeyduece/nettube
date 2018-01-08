import React, { Component } from 'react';
import _ from 'lodash'
import GoogleLogin from 'react-google-login';
import { PostUser } from './components/PostUser'
import { endUserSession } from './components/endUserSession'
import './components/LoginButton/LoginButton'
import ENV from './config'
import Home from './components/Home/Home'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deets: null,
      videos: [],
      users: [],
      friendReqs: [],
      requests: []
    }
  }

  acceptFriend(e){
    let email = JSON.parse(localStorage.userData).email
    let friend_email = e.target.closest('div').children[0].textContent
    let tokenId = JSON.parse(localStorage.userData).token
    fetch('http://localhost:3000/api/v1/users/'+email+'/accept_request/'+friend_email,{
      method: 'PATCH',
      headers: {
        "HTTP_AUTHORIZATION": `${tokenId}`,
        'Authorization': tokenId,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
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

  getUsers() {
    let email =''
    if(localStorage.userData !== undefined){
      email = JSON.parse(localStorage.userData).email
    }
    fetch('http://localhost:3000/api/v1/users/'+email+'/all_users')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('users', JSON.stringify(data))
    })
    .catch(err => {
      console.log(err)
    })
  }

  parseUsers(data) {
    this.setState({users: data})
  }

  getFriendReqs() {
    let email =''
    if(localStorage.userData !== undefined){
      email = JSON.parse(localStorage.userData).email
    }
    fetch('http://localhost:3000/api/v1/users/'+email+'/requests')
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem('friendReqs', JSON.stringify(data))
    })
  }

  componentWillMount(){
    this.getUsers()
  }

  handleIncomingFriendReq(){
    let users = ''
    let incoming = ''
    if(localStorage.friendReqs !== undefined &&
        localStorage.friendReqs.length !== 0 &&
        localStorage.userData !== undefined){
      users = JSON.parse(localStorage.users)
      incoming = JSON.parse(localStorage.friendReqs).incoming
      users.filter(user => {
       incoming.map(req => {
        if(user.id === req.user_id){
          this.state.requests.push(user)
        }
      })
    })
    }
  }

  componentDidMount(){
    this.getFriendReqs()
    this.handleIncomingFriendReq()
  }

  signIn(res){
    PostUser(res, res.accessToken)
    .then(data => {
      let userData = {
        'id': data.id,
        'full_name': data.name,
        'first_name': data.first_name,
        'last_name': data.last_name,
        'email': data.email,
        'token': data.token,
        'image': data.image
      }
      if(userData.token === res.accessToken){
        localStorage.setItem('userData', JSON.stringify(userData))
        this.setState({deets: JSON.parse(localStorage.userData)})
      }
    })
  }


  renderLogin() {
    const responseGoogle = (response) => {
      console.log(response)
      this.signIn(response)
    }

    return(
      <div id='login-page'>
      <h1 className='app-name'>netTUBE</h1>
      <GoogleLogin
      className='loginBtn loginBtn--google'
      clientId={ENV['GOOGLE_ID']}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      />
      </div>
    )
  }

  logout(){
    console.log('logout')
    endUserSession(this.state.deets)
    this.setState({deets: null})
    localStorage.removeItem('userData')
  }

  loginOrHome(){
    if(localStorage.userData === undefined){
      return this.renderLogin()
    }else {
      return <Home logout={this.logout.bind(this)}
                   deets={localStorage.userData}
                   users={this.state.users}
                   friendReqs={this.state.friendReqs}
                   search={this.handleSearch.bind(this)}
                   videos={this.state.videos}
                   incoming={this.state.requests}
                   accept={this.acceptFriend.bind(this)}
              />
    }
  }

  render() {
    return (
      <div className='App'>
      {this.loginOrHome()}
      </div>
    )
  }
}

export default App;
