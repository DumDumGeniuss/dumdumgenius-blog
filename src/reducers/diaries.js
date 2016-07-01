import { diaryActionTypes } from '../constants/ActionTypes'

let initState = {
	diariesInfo: null,
	diaries: [],
	diary: null,
	createDiaryComplete: false
}

export default function counter(state = initState, action) {
	switch (action.type) {
		case diaryActionTypes.GET_DIARIES_INFO:
			return Object.assign({}, state, {diariesInfo: action.diariesInfo})
		case diaryActionTypes.GET_DIARIES_BY_CATEGORY:
			return Object.assign({}, state, {diaries: action.diaries})
		case diaryActionTypes.GET_DIARY:
			return Object.assign({}, state, {diary: action.diary})
		case diaryActionTypes.ADD_DIARY:
			return Object.assign({}, state, {createDiaryComplete: action.result})

		default:
			return state
	}
}