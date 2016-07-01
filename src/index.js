import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import AllRoutes from './route/AllRoutes'

import firebase from './services/firebase'
import blogStore from './store/blogStore'


const store = blogStore()
const app = document.getElementById('app')

ReactDOM.render(
	<Provider store={store}>
		<AllRoutes />
	</Provider>
, app)
