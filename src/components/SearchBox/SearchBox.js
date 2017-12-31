import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import './SearchBox.css'

export default class SearchBox extends Component {
  handleSearch(e){
    e.preventDefault()
    let video = e.target.previousSibling.value
    this.props.search(video)
  }

  render() {
    return(
      <form className="search-box" >
      <input type="text" placeholder="Search.." name="search" autoComplete='off'/>
      <Route render={({history}) => (
      <button className="fa fa-search" type="submit" onClick={this.handleSearch.bind(this)}>
      </button>
      )} />
      </form>
    )
  }
}
