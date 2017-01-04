/*
This file defines the main Redux Store. It will be required by all "smart" components in the app,
in our case Home and Hero.
*/

import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers'
import ReduxThunk from 'redux-thunk'  // allows us to use asynchronous actions

import getInitialAppState from './initialstate'

const initialstate = getInitialAppState()

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(rootReducer,initialstate,enhancer)

export default store;
