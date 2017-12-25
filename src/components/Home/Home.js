import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

export default class Home extends Component {

  componentDidMount(){
    let data = JSON.parse(sessionStorage.getItem('responseJson'))
    debugger
  }

  render(){
    return(
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}
