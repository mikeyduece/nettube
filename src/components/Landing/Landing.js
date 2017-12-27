import React, { Component } from 'react';
import LoginButton from '../LoginButton/LoginButton'
import Home from '../Home/Home'

export default class Landing extends Component {
  constructor(props){
    super(props)
  }

  loggedIn(){
    if(localStorage.length === 0){
      return <Landing />
    }
  }

  render() {
    return (
      <div id='login-page'>
        <h1 className='app-name'>netTUBE</h1>
        <LoginButton />
      </div>
    )
  }
}

