import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Favorites from './components/Favorites/Favorites'
import Playlist from './components/Playlist/Playlist'

export default class Routes extends Component {
  render() {
    return(
      <Switch >
        <Route exact path='/' component={App}/>
        <Route path='/favorites' component={Favorites}/>
        <Route path='/playlist' component={Playlist} />
      </Switch>
    ) }
}
