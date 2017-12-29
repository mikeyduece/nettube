import React, {Component} from 'react'
import './Video.css'

export default class Video extends Component {
  constructor(props) {
    super(props)
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
        <div className="card">
          <img className='video-still' src={this.image()} alt="Video Screenshot" />
          <div className="card-content">
            <div className="card-title">{this.props.title}</div>
            <p className="card-text">{this.props.description}</p>
            <button className="btn btn--block card-btn">Button</button>
          </div>
        </div>
    )
  }
}
