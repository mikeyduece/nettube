import React, { Component } from 'react';
import GoogleLogout from 'react-google-login'
import Landing from '../Landing/Landing'

export default class Logout extends Component {
  constructor(props) {
    super(props)
  }


  render(){
    return(
      <GoogleLogout
        onSuccess={this.props.onClick}
      >Logout
      </GoogleLogout>

    )
  }
}
