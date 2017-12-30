import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import App from './App'
import Favorites from './components/Favorites/Favorites'

export default class Routes extends Component {
  render() {
    return(
      <div className='routes'>
        <Route path='/' component={App} />
        <Route path='/favorites' component={Favorites} />
      </div>
    )
  }
}
