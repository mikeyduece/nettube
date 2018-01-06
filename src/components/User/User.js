import React, {Component} from 'react'
import './User.css'

export default class User extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className='user-card'>
        <div className='img'>
          <img className='user-img' src={this.props.user.image} alt='User Pic'/>
        </div>
        <div className='user-full-name'>
          <p>{this.props.user.name}</p>
        </div>
      <button className='add-friend'>Add Friend</button>
      </div>
    )
  }
}

