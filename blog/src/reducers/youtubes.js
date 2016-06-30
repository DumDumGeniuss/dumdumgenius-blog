import { youtubeActionTypes } from '../constants/ActionTypes'

let initState = {
	youtubes: []
}

export default function counter(state = initState, action) {
	switch (action.type) {
		case youtubeActionTypes.INIT_YOUTUBES:
			return Object.assign({}, state, {youtubes: action.youtubes})
		default:
			return state
	}
}