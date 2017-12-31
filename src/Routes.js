import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom'
import App from './App'
import Favorites from './components/Favorites/Favorites'
import Playlist from './components/Playlist/Playlist'
import Video from './components/Video/Video'
import SideBar from './components/SideBar/SideBar'

export default class Routes extends Component {
  render() {
    return(
      <Switch >
        <Route exact path='/' component={App}/>
        <Route path='/favorites' component={Favorites}/>
        <Route path='/favorites' component={Video} />
        <Route path='/playlist' component={Playlist} />
      </Switch>
    ) }
}
