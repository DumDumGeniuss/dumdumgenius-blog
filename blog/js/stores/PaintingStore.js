var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    Assign = require('object-assign');

var PaintingStore = Assign({}, EventEmitter.prototype, {
    
    paintings: [],
    getAll: function() {
    	return this.paintings;
    },
    addPainting: function(painting) {
        this.paintings.push(painting);
        console.log("Finish add painting");
        this.emit('add');
    },
    initialPainting: function(paintings) {
        var self = this;
        firebase.database().ref('paintings').once('value')
        .then(function(snapshot) {
            console.log(snapshot.val());
            self.paintings = snapshot.val();
            console.log(self.paintings[0]);
            self.emit('init');
        });
        //this.paintings = paintings;
        //console.log("Finished initial paintings");
    },
    handleAction: function(action) {
        switch(action.type) {
        	case 'ADD_PAINTING': {
        		this.addPainting(action.data);
        		break;
        	}
        	case 'INIT_PAINTINGS': {
        		this.initialPainting(action.data);
        		break;
        	}
        }
    }

});

AppDispatcher.register(PaintingStore.handleAction.bind(PaintingStore));

module.exports = PaintingStore;