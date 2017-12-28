import React, {Component} from 'react'
import SideBar from '../../components/SideBar/SideBar'

import './Home.css'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      info: JSON.parse(props.deets),
    }
  }

  handleSearch(video) {
    debugger
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
        <h1 className='user-home'>{this.state.info.full_name}</h1>
          <SideBar info={this.state.info} logout={this.handleLogout.bind(this)}/>
      </div>
    )
  }
}
