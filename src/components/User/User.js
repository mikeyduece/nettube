import React, {Component} from 'react'
import './User.css'

export default class User extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className='user-card'>
        <img className='user-img' src={this.props.user.image} alt='User Pic'/>
        <p className='user-full-name'>{this.props.user.name}</p>
        <div className='add-friend'>
          <i className='fa fa-user-plus'></i>
          <span className="tooltiptext">Add Friend</span>
        </div>
      </div>
    )
  }
}

