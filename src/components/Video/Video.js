import React, {Component} from 'react'
import { Creatable } from 'react-select'
import 'react-select/dist/react-select.css'
import './Video.css'

export default class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFav: false
    }
  }

  // removeFav() {
  //   let email = JSON.parse(localStorage.userData).email
  //   let vid   = this.props.id
  //   let name  = this.props.title
  //   fetch('http://localhost:3000/api/v1/users/' + email + '/favorites/' + vid, {
  //     method: 'DELETE',
  //   })
  //   .then(() => {
  //     alert(`You have removed ${name} from your favorites.`)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  buttonChange(){
    if(this.props.path === '/favorites') {
      return <i id={this.props.vid_id}
                onClick={this.props.removeFav}
                className='fa fa-times-circle'
                aria-hidden="true"></i>

    }else {
      return <i id={this.props.vid_id}
                onClick={this.handleFav.bind(this)}
                className='fa fa-heart-o'
                aria-hidden="true"></i>
    }
  }

  getVideoId(e){
    e.preventDefault()
    let vid = e.target.closest('div[class=card]').id
    this.props.videoId(vid)
  }

  image(){
    if(this.props.img_high !== undefined){
      return this.props.img_high
    }else{
      return this.props.img_default
    }
  }

  handleFav = (e) => {
    e.preventDefault()
    let userId = JSON.parse(localStorage.userData).email
    let attrs = {
      'etag': this.props.etag,
      'vid_id': this.props.vid_id,
      'img_high': this.props.img_high,
      'img_default': this.props.img_default,
      'title': this.props.title,
      'description': this.props.description,

    }
    let tokenId = JSON.parse(localStorage.userData).token
    fetch("http://localhost:3000/api/v1/users/" + userId + "/favorites", {
      method: 'POST',
      headers: {
        "HTTP_AUTHORIZATION": `${tokenId}`,
        'Authorization': tokenId,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(attrs)
    })
  }

  getPath() {
    if(this.props.path !== '/playlist') {
      return <Creatable className='creatable-box'/>
    }
  }

  changeHeart(e){
    e.preventDefault()
    this.setState({fav: !this.state.fav})
    let tgt = e.target
    if (tgt.tagName === 'I') {
      tgt.classList.toggle('fa-heart');
      tgt.classList.toggle('fa-heart-o');
    }
  }

  render() {
    return(
        <div id={this.props.vid_id} className="card">
          <img className='video-still' src={this.image()} alt="Video Screenshot" />
          <div className="card-content">
            <div className="card-title">{this.props.title}</div>
            <p className="card-text">{this.props.description}</p>
            <i onClick={this.getVideoId.bind(this)} className="fa fa-play" aria-hidden="true"></i>
            {this.getPath()}
            {this.buttonChange()}
          </div>

        </div>
    )
  }
}
