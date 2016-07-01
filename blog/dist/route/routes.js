'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _AboutMe = require('../pages/aboutMe/AboutMe');

var _AboutMe2 = _interopRequireDefault(_AboutMe);

var _Diaries = require('../pages/diaries/diaries/Diaries');

var _Diaries2 = _interopRequireDefault(_Diaries);

var _Create = require('../pages/diaries/create/Create');

var _Create2 = _interopRequireDefault(_Create);

var _Diary = require('../pages/diaries/diary/Diary');

var _Diary2 = _interopRequireDefault(_Diary);

var _UnderConstruct = require('../pages/underConstruct/UnderConstruct');

var _UnderConstruct2 = _interopRequireDefault(_UnderConstruct);

var _Facebook = require('../pages/facebook/Facebook');

var _Facebook2 = _interopRequireDefault(_Facebook);

var _Demo = require('../pages/demo/Demo');

var _Demo2 = _interopRequireDefault(_Demo);

var _Paintings = require('../pages/masterpieces/paintings/Paintings');

var _Paintings2 = _interopRequireDefault(_Paintings);

var _Youtubes = require('../pages/masterpieces/youtubes/Youtubes');

var _Youtubes2 = _interopRequireDefault(_Youtubes);

var _Layout = require('../components/layout/main/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Layout3 = require('../components/layout/masterpieces/Layout');

var _Layout4 = _interopRequireDefault(_Layout3);

var _Layout5 = require('../components/layout/diaries/Layout');

var _Layout6 = _interopRequireDefault(_Layout5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* About me */
exports.default = _react2.default.createElement(
	_reactRouter.Route,
	{ path: '/', component: _Layout2.default },
	_react2.default.createElement(_reactRouter.IndexRoute, { component: _AboutMe2.default }),
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: 'masterpieces', component: _Layout4.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Paintings2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'youtubes', component: _Youtubes2.default })
	),
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: 'diaries', component: _Layout6.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Diaries2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'create', component: _Create2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: ':id', component: _Diary2.default })
	),
	_react2.default.createElement(_reactRouter.Route, { path: 'underConstruct', component: _UnderConstruct2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: 'demo', component: _Demo2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: 'facebook', component: _Facebook2.default })
);

/* Layout */


/* MasterPieces */


/* Diaries */