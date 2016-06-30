'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _AllRoutes = require('./route/AllRoutes');

var _AllRoutes2 = _interopRequireDefault(_AllRoutes);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _blogStore = require('./store/blogStore');

var _blogStore2 = _interopRequireDefault(_blogStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _blogStore2.default)();
var app = document.getElementById('app');

var config = {
  apiKey: "AIzaSyBYZBZb122fhJLq_Pd-yoKOTA4ql4qf1tM",
  authDomain: "myblog-1decf.firebaseapp.com",
  databaseURL: "https://myblog-1decf.firebaseio.com",
  storageBucket: "myblog-1decf.appspot.com"
};
_firebase2.default.initializeApp(config);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_AllRoutes2.default, null)
), app);