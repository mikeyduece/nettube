// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route, Switch
} from 'react-router-dom'
import history from './history'
// Components
import Root from 'Root'
import App from 'components/App/App'
import SignUpForm from "./components/Auth/SignUpForm";


ReactDOM.render(
    <Root>
      <Router history={ history }>
        <Switch>
          <Route exact path='/' component={ App }/>
          <Route path='/signup' component={ SignUpForm }/>
        </Switch>
      </Router>
    </Root>,
    document.querySelector('#root')
)