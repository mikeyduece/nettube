import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    if(localStorage.length !== 0){
      this.state = JSON.parse(localStorage.userData)
    }else {
      this.state = null
    }
  }

  isLoggedIn() {
    if(this.state === null) {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <div className='App'>
        {this.isLoggedIn()
          ? <Home token={this.state.token} deets={this.state} />
          : <Landing />
        }
      </div>
    )
  }
}

export default App;
