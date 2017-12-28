import React, {Component} from 'react'
import './SearchBox.css'

export default class SearchBox extends Component {
  render() {
    return(
      <form className="search-box" >
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit">
      <i className="fa fa-search"></i>
      </button>
      </form>
      // <input type='text' name='search' placeholder='Search...'/>
    )
  }
}
