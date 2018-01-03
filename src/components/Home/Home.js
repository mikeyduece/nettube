import React, {Component} from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Main from '../Main/Main'
import _ from 'lodash'
import './Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: JSON.parse(props.deets),
      videos: [],
      playlistNames: [],
    }
  }

  getNames(){
    let email = JSON.parse(localStorage.userData).email
    fetch('http://localhost:3000/api/v1/users/' + email + '/playlist_names')
    .then(response => response.json())
    .then(data => {
      let names = this.state.playlistNames
      names.push(data)
      this.setState({playlistNames: names})
    })
  }

  componentDidMount(){
    this.getNames()
  }

  componentWillReceiveProps(){
    this.getNames()
  }

  handleSearch(video) {
    fetch(`http://localhost:3000/api/v1/search?q=${video}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        let compacted = _.compact(data)
        this.parseVideos(compacted)
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
          names={this.state.playlistNames}
        />
        <Main
          name={this.state.playlistNames}
          getNames={this.getNames.bind(this)}
          videos={this.state.videos}/>
      </div>
    )
  }
}
