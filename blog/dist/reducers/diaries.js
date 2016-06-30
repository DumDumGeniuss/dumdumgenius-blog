'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = counter;

var _ActionTypes = require('../constants/ActionTypes');

var initState = {
	diariesInfo: null,
	diaries: [],
	diary: null,
	createDiaryComplete: false
};

function counter() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case _ActionTypes.diaryActionTypes.GET_DIARIES_INFO:
			return Object.assign({}, state, { diariesInfo: action.diariesInfo });
		case _ActionTypes.diaryActionTypes.GET_DIARIES_BY_CATEGORY:
			return Object.assign({}, state, { diaries: action.diaries });
		case _ActionTypes.diaryActionTypes.GET_DIARY:
			return Object.assign({}, state, { diary: action.diary });
		case _ActionTypes.diaryActionTypes.ADD_DIARY:
			return Object.assign({}, state, { createDiaryComplete: action.result });

		default:
			return state;
	}
}