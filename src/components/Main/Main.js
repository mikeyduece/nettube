import React, {Component} from 'react'
import Video from '../Video/Video'
import './Main.css'

export default class Main extends Component {

  render(){
    return(
      <div className='cards'>
        {this.props.videos.map((video,index) => {
          return <Video key={index} {...video} />
         })}
      </div>
    )
  }
}
