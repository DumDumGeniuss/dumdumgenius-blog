var AppDispatcher = require('../dispatcher/AppDispatcher');

var PaintingActions = {
    addPainting: function(painting) {
        AppDispatcher.dispatch({
        	type: "ADD_PAINTING",
        	data: painting
        });
    },
    initPainting: function(paintings) {
    	AppDispatcher.dispatch({
    		type: "INIT_PAINTINGS",
    		data: paintings
    	});
    }
}

module.exports = PaintingActions;