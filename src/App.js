import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(sessionStorage.responseJson)
  }

  isLoggedIn() {
    return !!this.state.token
  }


  render() {
    return (
      <div className='App'>
        {this.isLoggedIn()
          ? <Home token={this.state.token} />
          : <Landing />
        }
      </div>
    );
  }
}

export default App;
