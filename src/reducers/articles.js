import { articleActionTypes } from '../constants/ActionTypes'

let initState = {
	articles: [],
	article: null
}

export default function counter(state = initState, action) {
	switch (action.type) {
		case articleActionTypes.QUERY_ARTICLES:
			return Object.assign({}, state, {articles: action.articles})
		case articleActionTypes.GET_ARTICLE:
			return Object.assign({}, state, {articles: action.article})
		default:
			return state
	}
}