'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _angleDoubleLeft = require('react-icons/lib/fa/angle-double-left');

var _angleDoubleLeft2 = _interopRequireDefault(_angleDoubleLeft);

var _angleDoubleRight = require('react-icons/lib/fa/angle-double-right');

var _angleDoubleRight2 = _interopRequireDefault(_angleDoubleRight);

var _SeparateLine = require('../../line/SeparateLine');

var _SeparateLine2 = _interopRequireDefault(_SeparateLine);

require('./TinyYoutubeBox.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TinyYoutubeBox = function (_React$Component) {
    _inherits(TinyYoutubeBox, _React$Component);

    function TinyYoutubeBox(props) {
        _classCallCheck(this, TinyYoutubeBox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TinyYoutubeBox).call(this, props));

        _this.state = {
            currentShowIndex: 0,
            youtubeTitle: 'Pick the one you like !',
            playYoutubeUrl: 'https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/youtubes%2FdefaultImage.png?alt=media',
            youtubePlayWidth: 640,
            youtubePlayHeight: 480
        };
        _this.handleResize = _this.handleResize.bind(_this);
        return _this;
    }

    _createClass(TinyYoutubeBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            window.addEventListener('resize', this.handleResize);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }
    }, {
        key: 'handleResize',
        value: function handleResize(event) {
            var windowWidth = event.srcElement.window.innerWidth;
            if (windowWidth < 800 && this.state.youtubePlayWidth == 640) {
                this.setState({
                    youtubePlayWidth: 280,
                    youtubePlayHeight: 210
                });
            } else if (windowWidth > 800 && this.state.youtubePlayWidth == 300) {
                this.setState({
                    youtubePlayWidth: 640,
                    youtubePlayHeight: 480
                });
            }
        }
    }, {
        key: 'setShowYoutube',
        value: function setShowYoutube(key, youtubes) {
            this.setState({
                playYoutubeUrl: youtubes[key].url,
                youtubeTitle: youtubes[key].title
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;
            var youtubeSize = this.props.youtubeSize,
                boxSize = this.props.boxSize,
                youtubes = this.props.youtubes,
                youtubePhotoListSize = this.props.youtubePhotoListSize,
                photoListScreenHeigth = youtubeSize.height;
            return _react2.default.createElement(
                'div',
                { style: Object.assign({ width: boxSize.width, height: boxSize.height }), className: 'TinyYoutubeBox-photoBox' },
                _react2.default.createElement(_SeparateLine2.default, { width: '100%' }),
                _react2.default.createElement(
                    'div',
                    { className: 'TinyYoutubeBox-photoListScreen', style: Object.assign({ width: youtubePhotoListSize.width }) },
                    _react2.default.createElement(_angleDoubleLeft2.default, { className: 'TinyYoutubeBox-navbarArrowLeft' }),
                    youtubes.map(function (result) {
                        return _react2.default.createElement('img', { onClick: self.setShowYoutube.bind(self, result.id, youtubes),
                            key: result.id,
                            src: result.screenshot,
                            style: Object.assign({ width: youtubeSize.width, height: youtubeSize.height }),
                            className: 'TinyYoutubeBox-photo' });
                    }),
                    _react2.default.createElement(_angleDoubleRight2.default, { className: 'TinyYoutubeBox-navbarArrowRight' })
                ),
                _react2.default.createElement(_SeparateLine2.default, { width: '100%' }),
                _react2.default.createElement(
                    'span',
                    { className: 'TinyYoutubeBox-photoNav' },
                    this.state.youtubeTitle
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'TinyYoutubeBox-displayVideoScreen' },
                    _react2.default.createElement('iframe', { src: this.state.playYoutubeUrl,
                        width: this.state.youtubePlayWidth,
                        height: this.state.youtubePlayHeight })
                )
            );
        }
    }]);

    return TinyYoutubeBox;
}(_react2.default.Component);

exports.default = TinyYoutubeBox;