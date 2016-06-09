var React = require('react');
var ReactDOM = require('react-dom');
var AboutMe = require('./pages/AboutMe');
var Demo = require('./pages/Demo');
var Paintings = require('./pages/masterpieces/Paintings');
var Youtubes = require('./pages/youtubes/Youtubes');
var { Router, Route, IndexRoute, hashHistory } = require('react-router');
var {StyleRoot} = require('radium');
var Layout = require('./components/layout/main/Layout');
var MasterpiecesLayout = require('./components/layout/masterpieces/Layout');
var firebase = require('firebase');

var app = document.getElementById('app');

var config = {
  apiKey: "AIzaSyBYZBZb122fhJLq_Pd-yoKOTA4ql4qf1tM",
  authDomain: "myblog-1decf.firebaseapp.com",
  databaseURL: "https://myblog-1decf.firebaseio.com",
  storageBucket: "myblog-1decf.appspot.com",
};
firebase.initializeApp(config);

ReactDOM.render(
	<StyleRoot>
	    <Router history={hashHistory}>
	        <Route path="/" component={Layout}>
	            <IndexRoute component={AboutMe}>
	            </IndexRoute>
	            <Route path="masterpieces" component={MasterpiecesLayout}>
	                <IndexRoute component={Paintings}>
	                </IndexRoute>
	                <Route path="youtubes" component={Youtubes}>
	                </Route>
	            </Route>
	        </Route>
	        <Route path="/demo" component={Demo}>
	        </Route>
	    </Router>
	</StyleRoot>
, app);


