'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _youtubeActionss = require('../../../actions/youtubeActionss');

var youtubeActions = _interopRequireWildcard(_youtubeActionss);

var _TinyYoutubeBox = require('../../../components/box/tinyYoutubeBox/TinyYoutubeBox');

var _TinyYoutubeBox2 = _interopRequireDefault(_TinyYoutubeBox);

var _firebase = require('../../../services/firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    require('./Youtubes.css');
}

var Youtubes = function (_React$Component) {
    _inherits(Youtubes, _React$Component);

    function Youtubes(props) {
        _classCallCheck(this, Youtubes);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Youtubes).call(this, props));

        _this.state = {
            Youtubes: []
        };
        return _this;
    }

    _createClass(Youtubes, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.initYoutubes();
        }
    }, {
        key: 'initYoutubes',
        value: function initYoutubes() {
            var actions = this.props.actions;

            _firebase2.default.database().ref('youtubes').once('value').then(function (snapshot) {
                var youtubes = snapshot.val();
                actions.initYoutubes(youtubes);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var state = this.props.state;

            var youtubes = state.youtubes;
            return _react2.default.createElement(
                'div',
                { className: 'Youtubes-mainArea' },
                _react2.default.createElement(_TinyYoutubeBox2.default, { boxSize: { width: '100%', height: 'none' },
                    youtubeSize: { width: '150px', height: 'none' },
                    youtubePhotoListSize: { width: '100%' },
                    youtubes: youtubes })
            );
        }
    }]);

    return Youtubes;
}(_react2.default.Component);

;

function mapStateToProps(state) {
    return {
        state: state.youtubes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(youtubeActions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Youtubes);