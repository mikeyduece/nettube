import React, {Component} from 'react'
import './Video.css'

export default class Video extends Component {
  constructor(props) {
    super(props)
  }

  getVideoId(e){
    e.preventDefault()
    let vid = e.target.closest('div[class=card]').id
  }

  image(){
    if(this.props.img_high !== undefined){
      return this.props.img_high
    }else{
      return this.props.img_default
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
          </div>

        </div>
    )
  }
}
