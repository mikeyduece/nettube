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
      users: [],
    }
  }

  getNames(){
    let email = JSON.parse(localStorage.userData).email
    fetch('http://localhost:3000/api/v1/users/' + email + '/playlist_names')
    .then(response => response.json())
    .then(data => {
      let newState = [...this.state.playlistNames, ...data]
      this.setState({playlistNames: newState})
      localStorage.setItem('newState', JSON.stringify(newState))
    })
  }

  getUsers() {
    let email = JSON.parse(localStorage.userData).email
    fetch('http://localhost:3000/api/v1/users/'+email+'/all_users')
    .then(response => response.json())
    .then(data => {
      this.parseUsers(data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount(){
    this.getNames()
  }

  shouldComponentUpdate(nextState){
    if(this.state !== nextState){
      return true
    }
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

  parseUsers(data) {
    this.setState({users: data})
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
          videos={this.state.videos}
          getUsers={this.getUsers.bind(this)}
          users={this.state.users}/>

      </div>
    )
  }
}
