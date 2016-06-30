'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _diaryActionss = require('../../../actions/diaryActionss');

var diaryActions = _interopRequireWildcard(_diaryActionss);

var _reactRouter = require('react-router');

var _plus = require('react-icons/lib/fa/plus');

var _plus2 = _interopRequireDefault(_plus);

var _facebook = require('react-icons/lib/fa/facebook');

var _facebook2 = _interopRequireDefault(_facebook);

var _SeparateLine = require('../../../components/line/SeparateLine');

var _SeparateLine2 = _interopRequireDefault(_SeparateLine);

var _DiaryNavBox = require('../../../components/box/diaryNavBox/DiaryNavBox');

var _DiaryNavBox2 = _interopRequireDefault(_DiaryNavBox);

require('./Diaries.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Diaries = function (_React$Component) {
    _inherits(Diaries, _React$Component);

    function Diaries(props) {
        _classCallCheck(this, Diaries);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Diaries).call(this, props));

        _this.state = {
            loginButton: false
        };
        _this.queryDiariesByCategory = _this.queryDiariesByCategory.bind(_this);
        return _this;
    }

    _createClass(Diaries, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var user = firebase.auth().currentUser;
            console.log("User status", user);
            if (user) {
                this.setState({
                    isLogin: true
                });
            } else {
                this.setState({
                    isLogin: false
                });
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getDiariesInfo();
        }
    }, {
        key: 'queryDiariesByCategory',
        value: function queryDiariesByCategory(category) {
            var actions = this.props.actions;

            self = this;

            firebase.database().ref('diaries').child(category + '/datas').orderByChild('date').once('value').then(function (result) {
                var diaries = toArray(result.val());
                actions.getDiariesByCategory(diaries);
            });
        }
    }, {
        key: 'getDiariesInfo',
        value: function getDiariesInfo() {
            var actions = this.props.actions;
            var self = this;

            firebase.database().ref('diariesInfo').once('value').then(function (result) {
                var diariesInfo = result.val();
                actions.getDiariesInfo(diariesInfo);
                self.queryDiariesByCategory(diariesInfo.categories[1]);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var state = this.props.state;
            var diariesInfo = state.diariesInfo;
            var diaryCategories = diariesInfo ? diariesInfo.categories : [];
            var diaries = state.diaries;
            var loginButton = void 0,
                self = this;

            if (this.state.isLogin) {
                loginButton = _react2.default.createElement(_plus2.default, { className: 'Diaries-addArticleButton' });
            } else {
                loginButton = null;
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'Diaries-diariesBox' },
                    _react2.default.createElement(
                        'div',
                        { className: 'Diaries-categoriesNav' },
                        diaryCategories.map(function (result) {
                            return _react2.default.createElement(
                                'span',
                                { key: result, className: 'Diaries-categoryLabel', onClick: self.queryDiariesByCategory.bind(self, result) },
                                result
                            );
                        })
                    ),
                    diaries.map(function (result) {
                        return _react2.default.createElement(_DiaryNavBox2.default, { key: result.id, diary: result });
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'Diaries-addDiaryZone' },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { className: 'Diaries-linkStyle', to: '/diaries/create' },
                            loginButton
                        ),
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { className: 'Diaries-linkStyle', to: '/facebook' },
                            _react2.default.createElement(_facebook2.default, { className: 'Diaries-addArticleButton' })
                        )
                    )
                )
            );
        }
    }]);

    return Diaries;
}(_react2.default.Component);

function toArray(map) {
    var array = [];
    for (var key in map) {
        var item = map[key];
        item.id = key;
        array.push(item);
    }
    return array;
}

function mapStateToProps(state) {
    return {
        state: state.diaries
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(diaryActions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Diaries);