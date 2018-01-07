import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
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
      deets: null
    }
  }

  signIn(res){
    let userData = {
      'full_name': res.w3.ig,
      'first_name': res.w3.ofa,
      'last_name': res.w3.wea,
      'email': res.w3.U3,
      'token': res.accessToken,
      'image': res.w3.Paa
    }

    PostUser(userData, res.accessToken)
    .then(data => {
      debugger
    })
    if(userData.token === res.accessToken){
      localStorage.setItem('userData', JSON.stringify(userData))
      this.setState({deets: JSON.parse(localStorage.userData)})
    }
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
    localStorage.clear()
  }

  render() {
    return (
      <div className='App'>
      {localStorage.userData === undefined
        ? this.renderLogin()
        : <Home logout={this.logout.bind(this)} deets={localStorage.userData}/>}
      </div>
    )
  }
}

export default App;
