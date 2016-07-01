'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = counter;

var _ActionTypes = require('../constants/ActionTypes');

var initState = {
	youtubes: []
};

function counter() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case _ActionTypes.youtubeActionTypes.INIT_YOUTUBES:
			return Object.assign({}, state, { youtubes: action.youtubes });
		default:
			return state;
	}
}