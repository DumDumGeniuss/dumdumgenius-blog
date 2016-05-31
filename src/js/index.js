var React = require('react');
var ReactDOM = require('react-dom');
var AboutMe = require('./pages/AboutMe.js');
var { Router, Route, IndexRoute, hashHistory } = require('react-router');
var Layout = require('./components/layout/aboutMe/Layout.js');

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
	    <Route path="/" component={Layout}>
	        <IndexRoute component={AboutMe}>
	        </IndexRoute>
	    </Route>
	</Router>
, app);
