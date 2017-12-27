import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  isLoggedIn() {
    if(localStorage.userData) {
      return true
    } else {
      return false
    }
  }

  renderHome() {
    return <Home />
  }

  renderLanding() {
    return <Landing />
  }

  render() {
    return (
      <div className='App'>
      {this.isLoggedIn()
      ? this.renderHome()
      : this.renderLanding()}
      </div>
    )
  }
}

export default App;
