import React, {Component} from 'react'
import Video from '../Video/Video'

export default class Main extends Component {

  render(){
    return(
      <ul className='cards'>
      {this.props.videos.map((video,index) => {
              return <Video key={index} {...video} />
           })}
      </ul>
    )
  }
}
