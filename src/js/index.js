var React = require('react');
var ReactDOM = require('react-dom');
var Welcome = require('./pages/Welcome.js');
var { Router, Route, IndexRoute, hashHistory } = require('react-router');

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
	    <Route path="/" component={Welcome}>
	    </Route>
	</Router>
, app);
