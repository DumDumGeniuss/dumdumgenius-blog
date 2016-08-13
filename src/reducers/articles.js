import { articleActionTypes } from '../constants/ActionTypes'

let initState = {
	articles: [],
	article: {},
	categories: []
}

export default function counter(state = initState, action) {
	switch (action.type) {
		case articleActionTypes.QUERY_ARTICLES:
			return Object.assign({}, state, {articles: action.articles})
		case articleActionTypes.GET_ARTICLE:
			return Object.assign({}, state, {article: action.article})
		case articleActionTypes.QUERY_ARTICLE_CATEGORIES:
			return Object.assign({}, state, {categories: action.categories})
		case articleActionTypes.ADD_ARTICLE:
			return Object.assign({}, state, {})
		default:
			return state
	}
}