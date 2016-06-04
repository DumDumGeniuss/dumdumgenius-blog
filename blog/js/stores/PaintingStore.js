var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');

var PaintingStore = assign({}, EventEmitter.prototype, {
    
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
        this.paintings = paintings;
        console.log("Finished initial paintings");
        this.emit('init');
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