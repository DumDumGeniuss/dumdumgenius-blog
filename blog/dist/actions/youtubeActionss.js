'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initYoutubes = initYoutubes;
exports.addYoutube = addYoutube;

var _ActionTypes = require('../constants/ActionTypes');

function initYoutubes(youtubes) {
	return {
		type: _ActionTypes.youtubeActionTypes.INIT_YOUTUBES,
		youtubes: youtubes
	};
}

function addYoutube() {
	return {
		type: _ActionTypes.youtubeActionTypes.ADD_YOUTUBE
	};
}