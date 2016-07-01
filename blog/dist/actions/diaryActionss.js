'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getDiariesInfo = getDiariesInfo;
exports.addDiary = addDiary;
exports.getDiariesByCategory = getDiariesByCategory;
exports.getDiary = getDiary;

var _ActionTypes = require('../constants/ActionTypes');

function getDiariesInfo(diariesInfo) {
	return {
		type: _ActionTypes.diaryActionTypes.GET_DIARIES_INFO,
		diariesInfo: diariesInfo
	};
}

function addDiary(result) {
	return {
		type: _ActionTypes.diaryActionTypes.ADD_DIARY,
		result: result
	};
}

function getDiariesByCategory(diaries) {
	return {
		type: _ActionTypes.diaryActionTypes.GET_DIARIES_BY_CATEGORY,
		diaries: diaries
	};
}

function getDiary(diary) {
	return {
		type: _ActionTypes.diaryActionTypes.GET_DIARY,
		diary: diary
	};
}