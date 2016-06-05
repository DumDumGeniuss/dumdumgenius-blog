var React = require('react');
var ReactDOM = require('react-dom');
var AboutMe = require('./pages/AboutMe');
var Demo = require('./pages/Demo');
var Paintings = require('./pages/masterpieces/Paintings')
var { Router, Route, IndexRoute, hashHistory } = require('react-router');
var {StyleRoot} = require('radium');
var Layout = require('./components/layout/main/Layout');
var MasterpiecesLayout = require('./components/layout/masterpieces/Layout');

const app = document.getElementById('app');

ReactDOM.render(
	<StyleRoot>
	    <Router history={hashHistory}>
	        <Route path="/" component={Layout}>
	            <IndexRoute component={AboutMe}>
	            </IndexRoute>
	            <Route path="masterpieces" component={MasterpiecesLayout}>
	                <IndexRoute path="paintings" component={Paintings}>
	                </IndexRoute>
	            </Route>
	        </Route>
	        <Route path="/demo" component={Demo}>
	        </Route>
	    </Router>
	</StyleRoot>
, app);
