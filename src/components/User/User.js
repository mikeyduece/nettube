import React, {Component} from 'react'
import './User.css'

export default class User extends Component {

  iconChange(){
    let id = ''
    let friendReqs = ''
    let requestStuff = JSON.parse(localStorage.friendReqs).status
    if(requestStuff !== 404 && localStorage.userData !== undefined){
      debugger
       id = JSON.parse(localStorage.userData).id
       friendReqs = JSON.parse(localStorage.friendReqs)
       return(friendReqs.outgoing.map((request) => {
        if(request.user_id === id && request.friend_id === this.props.user.id){
          return <i key={'friendReq' + request.id} className="fa fa-clock-o"
                    aria-hidden="true">
                   <span className='pending-req'>
                     Friend Request Pending
                   </span>
                 </i>
        }
      })
      )
    }
  }

  render() {
    return(
        <div className='user-card'>
          <div className='email' hidden='true'>{this.props.user.email}</div>
          <img className='user-img' src={this.props.user.image} alt='User Pic'/>
          <p className='user-full-name'>{this.props.user.name}</p>
          <div className='add-friend'>
            <i className='fa fa-user-plus' onClick={this.props.addFriend}>
              <span className="tooltiptext">Add Friend</span>
            </i>
          </div>
          {this.iconChange()}
        </div>
    )
  }
}

