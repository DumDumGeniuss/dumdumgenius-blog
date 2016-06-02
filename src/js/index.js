var React = require('react');
var ReactDOM = require('react-dom');
var AboutMe = require('./pages/AboutMe.js');
var Demo = require('./pages/Demo.js');
var { Router, Route, IndexRoute, hashHistory } = require('react-router');
var {StyleRoot} = require('radium');
var Layout = require('./components/layout/main/Layout.js');

const app = document.getElementById('app');

ReactDOM.render(
	<StyleRoot>
	    <Router history={hashHistory}>
	        <Route path="/" component={Layout}>
	            <IndexRoute component={AboutMe}>
	            </IndexRoute>
	            <Route path="demo" component={Demo}>
	            </Route>
	        </Route>
	    </Router>
	</StyleRoot>
, app);
