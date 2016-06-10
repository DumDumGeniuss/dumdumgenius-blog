var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    Assign = require('object-assign');

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
            console.log(snapshot.val());
            self.youtubes = snapshot.val();
            console.log(self.youtubes[0]);
            self.emit('init');
        });
        //this.Youtubes = Youtubes;
        //console.log("Finished initial Youtubes");
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