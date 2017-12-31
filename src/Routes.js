import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom'
import App from './App'
import Favorites from './components/Favorites/Favorites'

export default class Routes extends Component {
  render() {
    return(
      <Switch >
        <Route exact path='/' component={App}/>
        <Route path='/favorites' component={Favorites}/>
      </Switch>
    ) }
}
