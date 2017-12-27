import React, {Component} from 'react'
// import Logout from '../Logout/Logout'
// import Landing from '../Landing/Landing'
// import { Redirect } from 'react-router-dom'

export default class Home extends Component {

  constructor(props) {
    super(props)
  }


  logout(){
    console.log('logout')
    localStorage.clear()
  }

  handleToken() {
    if(this.state.token !== this.props.token){
      this.logout()
    }
  }

  render(){
    return(
      <div>
        <h1>Home Page</h1>
        <button onClick={this.logout}
          token={this.props.token}>
          Logout
        </button>
      </div>
    )
  }
}
