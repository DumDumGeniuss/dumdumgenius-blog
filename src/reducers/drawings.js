import { drawingsActionTypes } from '../constants/ActionTypes'

let initState = {
	drawings: [],
	drawing: {}
}

export default function counter(state = initState, action) {
	let drawings = state.drawings
	switch (action.type) {
		case drawingsActionTypes.QUERY_DRAWINGS:
			return Object.assign({}, state, {drawings: action.drawings})
		case drawingsActionTypes.ADD_DRAWING:
			drawings.push(action.drawing)
			return Object.assign({}, state, {drawings: drawings})
		case drawingsActionTypes.DELETE_DRAWING:
			for(let i in drawings) {
				if(drawings[i]._id == action.drawingId) {
					drawings.splice(i, 1);
				}
			}
			return Object.assign({}, state, {drawings: drawings})
		default:
			return state
	}
}