'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _paintingActions = require('../../../actions/paintingActions');

var paintingActions = _interopRequireWildcard(_paintingActions);

var _TinyPhotoBox = require('../../../components/box/tinyPhotoBox/TinyPhotoBox');

var _TinyPhotoBox2 = _interopRequireDefault(_TinyPhotoBox);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paintings = function (_React$Component) {
    _inherits(Paintings, _React$Component);

    function Paintings(props) {
        _classCallCheck(this, Paintings);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Paintings).call(this, props));
    }

    _createClass(Paintings, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.initPaintings();
        }
    }, {
        key: 'initPaintings',
        value: function initPaintings() {
            var actions = this.props.actions;

            firebase.database().ref('paintings').once('value').then(function (snapshot) {
                var paintings = snapshot.val();
                actions.initPaintings(paintings);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var state = this.props.state;

            var paintings = state.paintings;
            return _react2.default.createElement(
                'div',
                { className: 'Paintings-mainArea' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_TinyPhotoBox2.default, { boxSize: { width: '100%', height: 'none' },
                        photoSize: { width: '100px', height: 'none' },
                        photoListSize: { width: '100%' },
                        paintings: paintings })
                )
            );
        }
    }]);

    return Paintings;
}(_react2.default.Component);

function mapStateToProps(state) {
    return {
        state: state.paintings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(paintingActions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Paintings);