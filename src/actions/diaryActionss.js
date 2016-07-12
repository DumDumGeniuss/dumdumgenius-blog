import { diaryActionTypes } from '../constants/ActionTypes'

export function getDiariesInfo(diariesInfo) {
	return {
		type: diaryActionTypes.GET_DIARIES_INFO,
		diariesInfo
	}
}

export function addDiary(result) {
	return {
		type: diaryActionTypes.ADD_DIARY,
		result
	}
}

export function getDiariesByCategory(diaries) {
	return {
		type: diaryActionTypes.GET_DIARIES_BY_CATEGORY,
		diaries
	}
}

export function getDiaries(diaries) {
	return {
		type: diaryActionTypes.GET_DIARIES,
		diaries
	}
}

export function getDiary(diary) {
	return {
		type: diaryActionTypes.GET_DIARY,
		diary
	}
}

export function setDiaryUrl(diaryUrl) {
	return {
		type: diaryActionTypes.SET_DIARY_URL,
		diaryUrl
	}
}