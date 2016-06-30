'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _paintings = require('./paintings');

var _paintings2 = _interopRequireDefault(_paintings);

var _youtubes = require('./youtubes');

var _youtubes2 = _interopRequireDefault(_youtubes);

var _diaries = require('./diaries');

var _diaries2 = _interopRequireDefault(_diaries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	paintings: _paintings2.default,
	youtubes: _youtubes2.default,
	diaries: _diaries2.default
});

exports.default = rootReducer;