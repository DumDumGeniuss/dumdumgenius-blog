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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    require('./TinyPhotoBox.css');
}

var TinyPhotoBox = function (_React$Component) {
    _inherits(TinyPhotoBox, _React$Component);

    function TinyPhotoBox(props) {
        _classCallCheck(this, TinyPhotoBox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TinyPhotoBox).call(this, props));

        _this.state = {
            currentShowIndex: 0,
            showPainting: null,
            paintingTitle: 'Pick the one you like !',
            defaultImageUrl: 'https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/paintings%2FdefaultImage.png?alt=media',
            displayPhotoClass: "TinyPhotoBox-displayPhoto"
        };
        return _this;
    }

    _createClass(TinyPhotoBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'setShowPainting',
        value: function setShowPainting(key, paintings) {
            var self = this;
            self.setState({
                showPainting: paintings[key],
                paintingTitle: paintings[key].title,
                displayPhotoClass: "TinyPhotoBox-displayPhoto"
            });
        }
    }, {
        key: 'photoOnLoad',
        value: function photoOnLoad() {
            this.setState({
                displayPhotoClass: "TinyPhotoBox-displayPhoto TinyPhotoBox-showIn"
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;
            var photoSize = this.props.photoSize,
                boxSize = this.props.boxSize,
                paintings = this.props.paintings,
                photoListSize = this.props.photoListSize,
                displayPhotoClass = this.state.displayPhotoClass;
            return _react2.default.createElement(
                'div',
                { style: Object.assign({ width: boxSize.width, height: boxSize.height }),
                    className: 'TinyPhotoBox-photoBox' },
                _react2.default.createElement(_SeparateLine2.default, { width: '100%' }),
                _react2.default.createElement(
                    'div',
                    { style: Object.assign({ width: photoListSize.width }),
                        className: 'TinyPhotoBox-photoListScreen' },
                    _react2.default.createElement(_angleDoubleLeft2.default, { className: 'TinyPhotoBox-navbarArrowLeft' }),
                    paintings.map(function (result) {
                        return _react2.default.createElement('img', { onClick: self.setShowPainting.bind(self, result.id, paintings),
                            key: result.id, src: result.src,
                            style: Object.assign({ width: photoSize.width, height: photoSize.height }),
                            className: 'TinyPhotoBox-photo' });
                    }),
                    _react2.default.createElement(_angleDoubleRight2.default, { className: 'TinyPhotoBox-navbarArrowRight' })
                ),
                _react2.default.createElement(_SeparateLine2.default, { width: '100%' }),
                _react2.default.createElement(
                    'span',
                    { className: 'TinyPhotoBox-photoNav' },
                    this.state.paintingTitle
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'TinyPhotoBox-displayScreen' },
                    _react2.default.createElement('img', { className: displayPhotoClass,
                        onLoad: self.photoOnLoad.bind(self),
                        src: this.state.showPainting ? this.state.showPainting.src : this.state.defaultImageUrl })
                )
            );
        }
    }]);

    return TinyPhotoBox;
}(_react2.default.Component);

exports.default = TinyPhotoBox;