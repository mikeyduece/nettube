import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { PostUser } from '../PostUser'
import ENV from '../../config'
import './LoginButton.css'

export default class LoginButton extends Component {
  // constructor(props){
  //   super(props)
  // }

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
    if(userData.token === res.accessToken){
      localStorage.setItem('userData', JSON.stringify(userData))
    }
  }


  render() {
    const responseGoogle = (response) => {
      console.log(response)
      this.signIn(response)
    }

    return (
      <GoogleLogin
      className='loginBtn loginBtn--google'
      clientId={ENV['GOOGLE_ID']}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      />
    )
  }
}
