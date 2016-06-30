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

require('./Create.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Create = function (_React$Component) {
    _inherits(Create, _React$Component);

    function Create(props) {
        _classCallCheck(this, Create);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Create).call(this, props));

        _this.state = {
            category: null,
            title: null,
            content: null,
            date: new Date().getTime(),
            categories: null
        };
        return _this;
    }

    _createClass(Create, [{
        key: 'createArticle',
        value: function createArticle() {
            var actions = this.props.actions;
            var self = this;
            var params = {
                category: self.state.category,
                title: self.state.title,
                content: self.state.content,
                date: self.state.date
            };
            firebase.database().ref('diaries/' + self.state.category + "/datas").push(params).then(function (result) {
                actions.addDiary(true);
            });
        }
    }, {
        key: 'handleCategoryChange',
        value: function handleCategoryChange(event) {
            this.setState({
                category: event.target.value
            });
        }
    }, {
        key: 'handleTitleChange',
        value: function handleTitleChange(event) {
            this.setState({
                title: event.target.value
            });
        }
    }, {
        key: 'handleContentChange',
        value: function handleContentChange(event) {
            this.setState({
                content: event.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { className: 'Create-inputLabel' },
                            'category'
                        ),
                        _react2.default.createElement('input', { className: 'Create-input', onChange: this.handleCategoryChange.bind(this) })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { className: 'Create-inputLabel' },
                            'title'
                        ),
                        _react2.default.createElement('input', { className: 'Create-input', onChange: this.handleTitleChange.bind(this) })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { className: 'Create-inputLabel' },
                            'content'
                        ),
                        _react2.default.createElement('textarea', { className: 'Create-textInput', onChange: this.handleContentChange.bind(this) })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'button',
                            { className: 'Create-submitButton', onClick: this.createArticle.bind(this) },
                            'submit'
                        )
                    )
                )
            );
        }
    }]);

    return Create;
}(_react2.default.Component);

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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Create);