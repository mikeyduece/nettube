import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import './application.env'
import './button.css'

export default class Button extends Component {

  responseGoogle(response){
    console.log(response)
    fetch('http://localhost:3000/api/v1/auth/google_oauth2/callback',{
      method: "POST",
      headers: {
        'Authorization': response.tokenId,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        'uid': response.w3.Eea,
        'full_name': response.w3.ig,
        'first_name': response.w3.ofa,
        'last_name': response.w3.wea,
        'email': response.w3.U3,
        'token': response.accessToken
      })
    })
  }


  render() {
    return (
      <GoogleLogin
        clientId={GOOGLE_ID}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}

      />
    )
  }
}
