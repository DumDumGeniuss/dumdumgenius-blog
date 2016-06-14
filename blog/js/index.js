var React = require('react');
var ReactDOM = require('react-dom');
var AboutMe = require('./pages/AboutMe');
var Diaries = require('./pages/diaries/Diaries');
var CreaetDiaries = require('./pages/diaries/Create');
var Diary = require('./pages/diaries/Diary');
var UnderConstruct = require('./pages/UnderConstruct');
var Facebook = require('./pages/Facebook');
var Demo = require('./pages/Demo');
var Paintings = require('./pages/masterpieces/Paintings');
var Youtubes = require('./pages/youtubes/Youtubes');
var { Router, Route, IndexRoute, hashHistory } = require('react-router');
var {StyleRoot} = require('radium');
var Layout = require('./components/layout/main/Layout');
var MasterpiecesLayout = require('./components/layout/masterpieces/Layout');
var DiariesLayout = require('./components/layout/diaries/Layout');
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
	            <Route path="diaries" component={DiariesLayout}>
	                <IndexRoute component={Diaries}>
	                </IndexRoute>
	                <Route path="create" component={CreaetDiaries}>
	                </Route>
	                <Route path=":id" component={Diary}>
	                </Route>
	            </Route>
	            <Route path="underConstruct" component={UnderConstruct}>
	            </Route>
	        </Route>
	        <Route path="/demo" component={Demo}>
	        </Route>
	        <Route path="/facebook" component={Facebook}>
	        </Route>
	    </Router>
	</StyleRoot>
, app);


