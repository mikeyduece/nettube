import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { PostUser } from './components/PostUser'
import { Redirect } from 'react-router-dom'
import ENV from './config'
import './button.css'

export default class Button extends Component {
  constructor(props){
    super(props)
    this.state = {
      redirectToReferrer: false
    }
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
        if(responseJson.userData){
          sessionStorage.setItem('userData', JSON.stringify(res.Json))
          this.setState({redirectToReferrer: true})
        }
      })
  }


  render() {
    if(this.state.RedirectToReferrer){
      return (<Redirect to='/home'/>)
    }

    const responseGoogle = (response) => {
      console.log(response)
      this.signIn(response)
    }

    return (
        <GoogleLogin
          clientId={ENV['GOOGLE_ID']}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
    )
  }
}
