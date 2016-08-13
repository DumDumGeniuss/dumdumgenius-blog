import { articleActionTypes } from '../constants/ActionTypes'
import request from 'superagent'
import config from '../constants/config' 
import es6Promise from 'es6-promise'
import url from 'url'
import 'isomorphic-fetch'

es6Promise.polyfill()


export function queryArticlesOptimistic(articles) {
	return {
		type: articleActionTypes.QUERY_ARTICLES,
		articles
	}
}

export function queryArticles(params) {
	let queryString = url.format({
		query: params
	})
	return function(dispatch) {
		fetch(config.apiUrl + '/articles' + queryString, {
			method: 'get'
		}).then(res => {
			return res.json()
		}).then(result => {
			dispatch(queryArticlesOptimistic(result.data))
		}).catch(err => {
			console.log(err)
		})
	}
}

export function getArticleOptimistic(article) {
	return {
		type: articleActionTypes.GET_ARTICLE,
		article
	}
}

export function getArticle(id) {
	return function(dispatch) {
		fetch(config.apiUrl + '/articles/' + id, {
			method: 'get'
		}).then(res => {
			return res.json()
		}).then(result => {
			dispatch(getArticleOptimistic(result.data));
		}).catch(err => {
			console.log(err)
		})
	}
}

export function addArticleOptimistic() {
	return {
		type: articleActionTypes.ADD_ARTICLE
	}
}

export function addArticle(article) {
	// return function(dispatch) {
		let params = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( article )
		};

		fetch(config.apiUrl + '/articles', params)
		.then(res => {
			console.log(res)
			// dispatch(addArticleOptimistic());
		}).catch(err => {
			console.log(err)
		})
	// }
}

export function queryArticleCategoriesOptimistic(categories) {
	return {
		type: articleActionTypes.QUERY_ARTICLE_CATEGORIES,
		categories
	}
}

export function queryArticleCategories() {
	return function(dispatch) {
		fetch(config.apiUrl + '/articles/info/categories', {
			method: 'get'
		}).then(res => {
			return res.json()
		}).then(result => {
			dispatch(queryArticleCategoriesOptimistic(result.data))
		}).catch(err => {
			console.log(err)
		})
	}
}

