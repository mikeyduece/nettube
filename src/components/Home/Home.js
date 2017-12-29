import React, {Component} from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Video from '../Video/Video'
import Main from '../Main/Main'
// import {searchYoutube} from './searchYoutube'

import './Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: JSON.parse(props.deets),
      videos: []
    }
  }

  handleSearch(video) {
    fetch(`http://localhost:3000/api/v1/search?q=${video}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.parseVideos(data)
      })
      .catch((err) =>{
        console.log(err)
      })
  }

  parseVideos(data) {
    this.setState({videos: data})
  }

  handleLogout() {
    this.props.logout()
  }


  handleToken() {
    if(this.state.token !== this.props.token){
      this.logout()
    }
  }

  render(){
    return(
      <div>
      <SideBar
      info={this.state.info}
      logout={this.handleLogout.bind(this)}
      search={this.handleSearch.bind(this)}
      />
      <Main videos={this.state.videos}/>
      </div>
    )
  }
}
