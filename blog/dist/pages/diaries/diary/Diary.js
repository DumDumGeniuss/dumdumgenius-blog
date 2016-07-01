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

var _reactRemarkable = require('react-remarkable');

var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

var _calendar = require('react-icons/lib/fa/calendar');

var _calendar2 = _interopRequireDefault(_calendar);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    require('./Diary.css');
}

var Diary = function (_React$Component) {
    _inherits(Diary, _React$Component);

    function Diary(props) {
        _classCallCheck(this, Diary);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Diary).call(this, props));

        _this.state = {
            diary: ''
        };
        _this.getDiary = _this.getDiary.bind(_this);
        return _this;
    }

    _createClass(Diary, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var query = this.props.location.query;
            var params = this.props.params;


            this.getDiary(query.category, params.id);
        }
    }, {
        key: 'getDiary',
        value: function getDiary(category, id) {
            var actions = this.props.actions;


            firebase.database().ref('diaries/' + category + '/datas/' + id).once('value').then(function (result) {
                var diary = result.val();
                actions.getDiary(diary);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var state = this.props.state;
            var diary = state.diary;
            var date = diary ? new Date(diary.date) : null;
            var typeLabelElem = diary ? _react2.default.createElement(
                'span',
                { className: 'Diary-typeLabel' },
                diary.category
            ) : null;
            var completeDate = getCompleteDate(date);
            var dateTextElem = diary ? _react2.default.createElement(
                'span',
                { className: 'Diary-dateText' },
                completeDate
            ) : null;
            return _react2.default.createElement(
                'div',
                { className: 'Diary-mainArea' },
                typeLabelElem,
                _react2.default.createElement(
                    'div',
                    { className: 'Diary-dateBox' },
                    _react2.default.createElement(_calendar2.default, { className: 'Diary-calendar' }),
                    dateTextElem
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'Diary-diaryContent' },
                    _react2.default.createElement(
                        _reactRemarkable2.default,
                        null,
                        diary ? diary.content : null
                    )
                )
            );
        }
    }]);

    return Diary;
}(_react2.default.Component);

function incrementZero(minutes) {
    return minutes < 10 ? "0" + minutes : minutes;
}

function getCompleteDate(date) {
    return date ? date.getFullYear() + "-" + incrementZero(date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + incrementZero(date.getMinutes()) : null;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Diary);