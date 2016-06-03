var React = require('react');
var ReactDOM = require('react-dom');
var AboutMe = require('./pages/AboutMe');
var Demo = require('./pages/Demo');
var Works = require('./pages/Works')
var { Router, Route, IndexRoute, hashHistory } = require('react-router');
var {StyleRoot} = require('radium');
var Layout = require('./components/layout/main/Layout');

const app = document.getElementById('app');

ReactDOM.render(
	<StyleRoot>
	    <Router history={hashHistory}>
	        <Route path="/" component={Layout}>
	            <IndexRoute component={AboutMe}>
	            </IndexRoute>
	            <Route path="works" component={Works}>
	            </Route>
	            <Route path="demo" component={Demo}>
	            </Route>
	        </Route>
	    </Router>
	</StyleRoot>
, app);
