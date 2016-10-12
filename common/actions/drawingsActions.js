import { drawingsActionTypes } from '../constants/ActionTypes'
import config from '../constants/config' 
import es6Promise from 'es6-promise'
import url from 'url'
import 'isomorphic-fetch'

export function addDrawingOptimistic(drawing) {
	return {
		type: drawingsActionTypes.ADD_DRAWING,
		drawing
	}
}

export function addDrawing(drawing) {
	const data = new FormData();
	data.append("content", drawing.content);
	data.append("drawing", drawing.drawing);
	// return function(dispatch) {
		let params = {
			method: 'POST',
			body: data
		};

		fetch(config.apiUrl + '/drawings', params)
		.then(res => {
			console.log(res)
			// dispatch(addPhotoOptimistic());
		}).catch(err => {
			console.log(err)
		})
	// }
}

export function deleteDrawingOptimistic(drawingId) {
	return {
		type: drawingsActionTypes.DELETE_DRAWING,
		drawingId
	}
}

export function deleteDrawing(id) {
	let params = {
		method: 'DELETE'
	};
	return function(dispatch) {
		fetch(config.apiUrl + '/drawings/' +  id, params)
		.then(res => {
			dispatch(deleteDrawingOptimistic(id))
		}).catch(err => {
			console.log(err)
		})
	}
}

export function queryDrawingsOptimistic(drawings) {
	return {
		type: drawingsActionTypes.QUERY_DRAWINGS,
		drawings
	}
}

export function queryDrawings(params) {
	let queryString = url.format({
		query: params
	})
	return function(dispatch) {
		fetch(config.apiUrl + '/drawings' + queryString, {
			method: 'get'
		}).then(res => {
			return res.json()
		}).then(result => {
			dispatch(queryDrawingsOptimistic(result.data))
		}).catch(err => {
			console.log(err)
		})
	}
}