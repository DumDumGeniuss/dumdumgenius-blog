var AppDispatcher = require('../dispatcher/AppDispatcher');

var YoutubeActions = {
    addYoutube: function(painting) {
        AppDispatcher.dispatch({
        	type: "ADD_YOUTUBE",
        	data: painting
        });
    },
    initYoutubes: function(paintings) {
    	AppDispatcher.dispatch({
    		type: "INIT_YOUTUBES",
    		data: paintings
    	});
    }
}

module.exports = YoutubeActions;