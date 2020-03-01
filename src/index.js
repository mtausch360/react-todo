import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import HooksApp from './hooks/App'
import rootReducer from './redux/reducers'
import App from './redux/components/App'

import logger from 'redux-logger';

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
 )

render(
  <Provider store={store}>
    <App />
    <HooksApp />
  </Provider>,
  document.querySelector('#app')
);
