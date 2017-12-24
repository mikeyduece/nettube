import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Button from './button'

class App extends Component {
  render() {
    return (
      <div id='login-page'>
        <h1 className='app-name'>NETTUBE</h1>
        <Button />
      </div>


    );
  }
}

export default App;
