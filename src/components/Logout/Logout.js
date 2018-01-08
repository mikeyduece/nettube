import React, { Component } from 'react';
import './Logout.css'

export default class Logout extends Component {


  render(){
    return(
      <button className='signout' onClick={this.props.handleLogout}>
        <i className="fa fa-sign-out" aria-hidden="true"></i>
        <span className='tooltiptext'>Logout</span>
      </button>

    )
  }
}
