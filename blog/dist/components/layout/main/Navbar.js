'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _facebook = require('react-icons/lib/fa/facebook');

var _facebook2 = _interopRequireDefault(_facebook);

var _github = require('react-icons/lib/fa/github');

var _github2 = _interopRequireDefault(_github);

var _twitter = require('react-icons/lib/fa/twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _google = require('react-icons/lib/fa/google');

var _google2 = _interopRequireDefault(_google);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _user = require('react-icons/lib/fa/user');

var _user2 = _interopRequireDefault(_user);

var _image = require('react-icons/lib/fa/image');

var _image2 = _interopRequireDefault(_image);

var _book = require('react-icons/lib/fa/book');

var _book2 = _interopRequireDefault(_book);

var _stickyNote = require('react-icons/lib/fa/sticky-note');

var _stickyNote2 = _interopRequireDefault(_stickyNote);

require('./Navbar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar() {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this));

        _this.state = {
            scrollTop: 0,
            navbarClass: 'MainNavbar-navbar',
            backgroundAreaClass: 'MainNavbar-backgroundArea'
        };
        _this.handleScroll = _this.handleScroll.bind(_this);
        return _this;
    }

    _createClass(Navbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('scroll', this.handleScroll);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.addEventListener('scroll', this.handleScroll);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(event) {
            this.setState({
                scrollTop: event.srcElement.body.scrollTop
            });

            if (this.state.scrollTop < 300) {
                if (this.state.navbarClass !== 'MainNavbar-navbar') {
                    this.setState({
                        navbarClass: 'MainNavbar-navbar'
                    });
                }
                if (this.state.backgroundAreaClass !== 'MainNavbar-backgroundArea') {
                    this.setState({
                        backgroundAreaClass: 'MainNavbar-backgroundArea'
                    });
                }
            } else if (this.state.scrollTop > 300) {
                if (this.state.navbarClass !== 'MainNavbar-navbarFixed') {
                    this.setState({
                        navbarClass: 'MainNavbar-navbarFixed'
                    });
                }
                if (this.state.backgroundAreaClass !== 'MainNavbar-backgroundAreaHigh') {
                    this.setState({
                        backgroundAreaClass: 'MainNavbar-backgroundAreaHigh'
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var navbarClass = this.state.navbarClass,
                backgroundAreaClass = this.state.backgroundAreaClass;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: backgroundAreaClass },
                    _react2.default.createElement(
                        'div',
                        { className: 'MainNavbar-mainBackground' },
                        _react2.default.createElement('img', { src: "https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/welcomBackground3.jpg?alt=media" })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'MainNavbar-textArea' },
                        _react2.default.createElement(
                            'span',
                            { className: 'MainNavbar-logoText' },
                            'DumDumGenius'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'MainNavbar-centerText' },
                            'Fullstack Developer'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'MainNavbar-logoArea' },
                            _react2.default.createElement(_facebook2.default, { className: 'MainNavbar-faIcon' }),
                            _react2.default.createElement(_github2.default, { className: 'MainNavbar-faIcon' }),
                            _react2.default.createElement(_twitter2.default, { className: 'MainNavbar-faIcon' }),
                            _react2.default.createElement(_google2.default, { className: 'MainNavbar-faIcon' })
                        )
                    ),
                    _react2.default.createElement('div', { className: 'MainNavbar-blockBackground' })
                ),
                _react2.default.createElement(
                    'nav',
                    { className: navbarClass },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'MainNavbar-navbarItem', to: '/' },
                        'About me'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'MainNavbar-navbarItem', to: '/masterpieces' },
                        'Masterpieces'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'MainNavbar-navbarItem', to: '/diaries' },
                        'Diaries'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'MainNavbar-navbarItem', to: '/underConstruct' },
                        'Tutorials'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'MainNavbar-navbarItemCollapse', to: '/' },
                        _react2.default.createElement(_user2.default, null)
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'MainNavbar-navbarItemCollapse', to: '/masterpieces' },
                        _react2.default.createElement(_image2.default, null)
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'MainNavbar-navbarItemCollapse', to: '/diaries' },
                        _react2.default.createElement(_book2.default, null)
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'MainNavbar-navbarItemCollapse', to: '/underConstruct' },
                        _react2.default.createElement(_stickyNote2.default, null)
                    )
                )
            );
        }
    }]);

    return Navbar;
}(_react2.default.Component);

exports.default = Navbar;