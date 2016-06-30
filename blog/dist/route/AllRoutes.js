'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* About me */


/* Diaries */


/* MasterPieces */


/* Layout */


var AllRoutes = function (_React$Component) {
	_inherits(AllRoutes, _React$Component);

	function AllRoutes(props) {
		_classCallCheck(this, AllRoutes);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AllRoutes).call(this, props));
	}

	_createClass(AllRoutes, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactRouter.Router,
				{ history: _reactRouter.hashHistory },
				_react2.default.createElement(
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
					_react2.default.createElement(_reactRouter.Route, { path: 'underConstruct', component: _UnderConstruct2.default })
				),
				_react2.default.createElement(_reactRouter.Route, { path: '/demo', component: _Demo2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: '/facebook', component: _Facebook2.default })
			);
		}
	}]);

	return AllRoutes;
}(_react2.default.Component);

exports.default = AllRoutes;