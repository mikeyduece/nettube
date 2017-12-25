import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      redirectToReferrer: false
    }
  }

  componentDidMount(){
    debugger
    let data = JSON.parse(sessionStorage.getItem('userData'))
  }

  render(){
    if(!sessionStorage.getItem('userData')){
      return (<Redirect to='/'/>)
    }

    return(
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}
