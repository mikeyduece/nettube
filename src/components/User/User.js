import React, {Component} from 'react'
import './User.css'

export default class User extends Component {

  render() {
    return(
        <div className='user-card'>
          <div className='email' hidden='true'>{this.props.user.email}</div>
          <img className='user-img' src={this.props.user.image} alt='User Pic'/>
          <p className='user-full-name'>{this.props.user.name}</p>
          <div className='add-friend'>
            <i className='fa fa-user-plus' onClick={this.props.addFriend}></i>
            <span className="tooltiptext">Add Friend</span>
          </div>
        <i className="fa fa-clock-o" aria-hidden="true"></i>
        </div>
    )
  }
}

