import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import AllRoutes from './route/AllRoutes'

import firebase from 'firebase'
import blogStore from './store/blogStore'


const store = blogStore()
const app = document.getElementById('app')

let config = {
  apiKey: "AIzaSyBYZBZb122fhJLq_Pd-yoKOTA4ql4qf1tM",
  authDomain: "myblog-1decf.firebaseapp.com",
  databaseURL: "https://myblog-1decf.firebaseio.com",
  storageBucket: "myblog-1decf.appspot.com"
}
firebase.initializeApp(config)

ReactDOM.render(
	<Provider store={store}>
		<AllRoutes />
	</Provider>
, app)
