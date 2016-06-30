'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initPaintings = initPaintings;
exports.addPainting = addPainting;

var _ActionTypes = require('../constants/ActionTypes');

function initPaintings(paintings) {
	return {
		type: _ActionTypes.paintingActionTypes.INIT_PAINTINGS,
		paintings: paintings
	};
}

function addPainting() {
	return {
		type: _ActionTypes.paintingActionTypes.ADD_PAINTING
	};
}