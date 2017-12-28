import React, {Component} from 'react'

export default class SearchBox extends Component {
  render() {
    return(
      <img src={this.props.image} alt='Avatar'  name='search' placeholder='Search...' />
    )
  }
}
