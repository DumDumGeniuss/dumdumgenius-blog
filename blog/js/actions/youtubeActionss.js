import { youtubeActionTypes } from '../constants/ActionTypes'

export function initYoutubes(youtubes) {
	return {
		type: youtubeActionTypes.INIT_YOUTUBES,
		youtubes
	}
}

export function addYoutube() {
	return {
		type: youtubeActionTypes.ADD_YOUTUBE
	}
}