/*
This is the entry point for the app! From here we merely import our routes definitions,
then use React and React-DOM to render it.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import {Router,hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import store from './store'
import routes from './routes'

ReactDOM.render(
	// The top-level Provider is what allows us to `connect` components to the store
	// using ReactRedux.connect (see components Home and Hero)
	<Provider store={store}>
		<Router routes={routes} history={hashHistory}/>
	</Provider>,
	document.getElementById("root")
);