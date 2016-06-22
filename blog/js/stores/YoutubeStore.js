import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import Assign from 'object-assign';

var YoutubeStore = Assign({}, EventEmitter.prototype, {
    
    youtubes: [],
    getAll: function() {
    	return this.youtubes;
    },
    addYoutube: function(Youtube) {
        this.Youtubes.push(Youtube);
        console.log("Finish add Youtube");
        this.emit('add');
    },
    initialYoutube: function(Youtubes) {
        var self = this;
        firebase.database().ref('youtubes').once('value')
        .then(function(snapshot) {
            self.youtubes = snapshot.val();
            self.emit('init');
        });
    },
    handleAction: function(action) {
        switch(action.type) {
        	case 'ADD_YOUTUBE': {
        		this.addYoutube(action.data);
        		break;
        	}
        	case 'INIT_YOUTUBES': {
        		this.initialYoutube(action.data);
        		break;
        	}
        }
    }

});

AppDispatcher.register(YoutubeStore.handleAction.bind(YoutubeStore));

module.exports = YoutubeStore;