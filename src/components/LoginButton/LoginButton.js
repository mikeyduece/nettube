import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { PostUser } from '../PostUser'
import ENV from '../../config'
import './LoginButton.css'

export default class LoginButton extends Component {
  constructor(props){
    super(props)
    this.signIn = this.signIn.bind(this)
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
      .then((result) =>{
        let responseJson = result
        if(responseJson.token == res.accessToken){
          sessionStorage.setItem('responseJson', JSON.stringify(responseJson))
        }
      })
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

