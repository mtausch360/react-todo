import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import logger from 'redux-logger';

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
 )
console.log('store', store.getState())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
