import React, {Component} from 'react'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      info: JSON.parse(props.deets)
    }
  }

  handleLogout() {
    this.props.logout()
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
        <button onClick={this.handleLogout.bind(this)}
          token={this.props.token}>
          Logout
        </button>
      </div>
    )
  }
}
