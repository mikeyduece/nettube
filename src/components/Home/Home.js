import React, {Component} from 'react'
import Logout from '../Logout/Logout'
import Landing from '../Landing/Landing'
import { Redirect } from 'react-router-dom'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = JSON.parse(localStorage.userData)
  }

  logout(){
    console.log('logout')
    localStorage.clear()
  }

  render(){
    return(
      <div>
        <h1>Home Page</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}
