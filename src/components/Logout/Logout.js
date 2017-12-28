import React, { Component } from 'react';

export default class Logout extends Component {


  render(){
    return(
      <button onClick={this.props.handleLogout}>
        <i className="fa fa-sign-out" aria-hidden="true"></i>
      </button>

    )
  }
}
