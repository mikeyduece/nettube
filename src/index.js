// Dependencies
import React       from 'react'
import ReactDOM    from 'react-dom'
import {
    Router,
    Route
}                  from 'react-router-dom'
import history     from './history'
// Components
import Root        from 'Root'
import App         from 'components/App/App'


ReactDOM.render(
    <Root>
        <Router history={ history }>
            <Route exact path='/' component={ App } />
        </Router>
    </Root>,
    document.querySelector('#root')
)