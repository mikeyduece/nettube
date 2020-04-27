// Dependencies
import React                   from 'react'
import { Provider }            from 'react-redux'
import {
    createStore,
    applyMiddleware
}                              from 'redux'
import reducers                from 'reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk              from 'redux-thunk'

export default ({ children, initialState }) => {
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(reduxThunk))
    )

    return (
        <Provider store={ store }>
            { children }
        </Provider>
    )
}