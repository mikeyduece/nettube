import React, {Component} from 'react'
import Logout from '../Logout/Logout'
import Landing from '../Landing/Landing'
import { Redirect } from 'react-router-dom'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      'email': props.deets.email,
      'full_name': props.deets.email,
      'first_name': props.deets.first_name,
      'last_name': props.deets.last_name,
      'image': props.deets.image,
    }
  }

  logout(){
    console.log('logout')
    return <Landing />
  }

  render(){
    return(
      <div>
        <h1>Home Page</h1>
        <Logout onClick={this.logout}/>
      </div>
    )
  }
}
