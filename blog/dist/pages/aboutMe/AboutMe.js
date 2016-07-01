'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SeparateLine = require('../../components/line/SeparateLine');

var _SeparateLine2 = _interopRequireDefault(_SeparateLine);

var _paintBrush = require('react-icons/lib/fa/paint-brush');

var _paintBrush2 = _interopRequireDefault(_paintBrush);

var _youtubePlay = require('react-icons/lib/fa/youtube-play');

var _youtubePlay2 = _interopRequireDefault(_youtubePlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    require('./AboutMe.css');
}

var AboutMe = function (_React$Component) {
    _inherits(AboutMe, _React$Component);

    function AboutMe(props) {
        _classCallCheck(this, AboutMe);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AboutMe).call(this, props));
    }

    _createClass(AboutMe, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'AboutMe-mainArea' },
                _react2.default.createElement(
                    'span',
                    { className: 'AboutMe-titleWordBig AboutMe-centerAlign' },
                    'Profile'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'AboutMe-box' },
                    _react2.default.createElement(
                        'span',
                        { className: 'AboutMe-contentText AboutMe-centerAlign' },
                        'Messi Yang ( DumDumGenius )'
                    ),
                    _react2.default.createElement(_SeparateLine2.default, { width: '50%' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'AboutMe-photoBox' },
                        _react2.default.createElement('img', { className: 'AboutMe-photo', src: "https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/selfPhoto2.jpg?alt=media" })
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'AboutMe-contentText AboutMe-centerAlign' },
                        'Taichung First Senior High School ( 2006 - 2009 )'
                    ),
                    _react2.default.createElement(_SeparateLine2.default, { width: '50%' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'AboutMe-logoBox' },
                        _react2.default.createElement('img', { className: 'AboutMe-logo', src: "https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FTCFSHLogo.png?alt=media" })
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'AboutMe-contentText AboutMe-centerAlign' },
                        'National Chiao Tung University ( 2009 - 2013 )'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'AboutMe-contentText AboutMe-centerAlign' },
                        'Electronical Engineering'
                    ),
                    _react2.default.createElement(_SeparateLine2.default, { width: '50%' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'AboutMe-logoBox' },
                        _react2.default.createElement('img', { className: 'AboutMe-logo', src: "https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FNCTU_emblem.png?alt=media" })
                    )
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'AboutMe-titleWordBig AboutMe-centerAlign' },
                    'Languages'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'AboutMe-box' },
                    _react2.default.createElement(
                        'span',
                        { className: 'AboutMe-contentText AboutMe-centerAlign' },
                        'Chinese（ 中文 ）'
                    ),
                    _react2.default.createElement(_SeparateLine2.default, { width: '50%' }),
                    _react2.default.createElement(
                        'span',
                        { className: 'AboutMe-contentText AboutMe-centerAlign' },
                        'Of course, I can speak it !'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'span',
                        { className: 'AboutMe-contentText AboutMe-centerAlign' },
                        'Fluent English ( TOEIC 835 )'
                    ),
                    _react2.default.createElement(_SeparateLine2.default, { width: '50%' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'AboutMe-photoBox' },
                        _react2.default.createElement('img', { className: 'AboutMe-photo', src: "https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/TOEIC.png?alt=media" })
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'AboutMe-contentText AboutMe-centerAlign' },
                        'Japanese Communication ( JLPT N2 )'
                    ),
                    _react2.default.createElement(_SeparateLine2.default, { width: '50%' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'AboutMe-photoBox' },
                        _react2.default.createElement('img', { className: 'AboutMe-photo', src: "https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/JLPT.png?alt=media" })
                    )
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'AboutMe-titleWordBig AboutMe-centerAlign' },
                    'Skills'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'AboutMe-box' },
                    _react2.default.createElement(
                        'span',
                        { className: 'AboutMe-contentText AboutMe-centerAlign' },
                        'Java , Ruby , JavaScript'
                    ),
                    _react2.default.createElement(_SeparateLine2.default, { width: '50%' }),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { className: 'AboutMe-inlineLogo AboutMe-middleAlign', src: "https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FJava.png?alt=media" }),
                        _react2.default.createElement(
                            'p',
                            { className: 'AboutMe-inlineParagraph AboutMe-middleAlign' },
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'Java:'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'Develop web application with Spring , Hibernate'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'Familiar with Java Design Pattern and server side Java design'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'Data Structure in Java'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { className: 'AboutMe-inlineLogo AboutMe-middleAlign', src: "https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FjavaScript.png?alt=media" }),
                        _react2.default.createElement(
                            'p',
                            { className: 'AboutMe-inlineParagraph AboutMe-middleAlign' },
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'JavaScript:'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'React ( on this blog ) , Angular'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'Beautiful coding style on JS'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'It\'s my favorite language now!'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { className: 'AboutMe-inlineLogo AboutMe-middleAlign', src: "https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FRuby.png?alt=media" }),
                        _react2.default.createElement(
                            'p',
                            { className: 'AboutMe-inlineParagraph AboutMe-middleAlign' },
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'Ruby:'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'Well knowledge on Ruby On Rails'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'Solved 50+ problems with Ruby on Leetcode'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { className: 'AboutMe-inlineLogo AboutMe-middleAlign', src: "https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FCss3.png?alt=media" }),
                        _react2.default.createElement(
                            'p',
                            { className: 'AboutMe-inlineParagraph AboutMe-middleAlign' },
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'CSS3:'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'Freakingly awesome UI designer'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'span',
                                { className: 'AboutMe-textInParagraph' },
                                'Artist out of engineers'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'AboutMe-titleWordBig AboutMe-centerAlign' },
                    'Contact Me'
                ),
                _react2.default.createElement('div', { className: 'AboutMe-separateLine' }),
                _react2.default.createElement(
                    'div',
                    { className: 'AboutMe-box' },
                    _react2.default.createElement(
                        'span',
                        { className: 'AboutMe-contentText AboutMe-centerAlign' },
                        'dumdumgenius@gmail.com'
                    ),
                    _react2.default.createElement('br', null)
                )
            );
        }
    }]);

    return AboutMe;
}(_react2.default.Component);

exports.default = AboutMe;