'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _firebase = require('../../services/firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facebook = function (_React$Component) {
    _inherits(Facebook, _React$Component);

    function Facebook(props) {
        _classCallCheck(this, Facebook);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Facebook).call(this, props));

        _this.state = {
            test: null
        };
        return _this;
    }

    _createClass(Facebook, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var provider = new _firebase2.default.auth.FacebookAuthProvider();
            _firebase2.default.auth().signInWithRedirect(provider).then(function (result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken,

                // The signed-in user info.
                user = result.user;
                // ...
                console.log(result);
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code,
                    errorMessage = error.message,

                // The email of the user's account used.
                email = error.email,

                // The firebase.auth.AuthCredential type that was used.
                credential = error.credential;
                // ...
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'Facebook!!!'
            );
        }
    }]);

    return Facebook;
}(_react2.default.Component);

module.exports = Facebook;