var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    Assign = require('object-assign');

var PaintingStore = Assign({}, EventEmitter.prototype, {
    
    paintings: [
    	{
            id: 0,
            src: './images/paintings/angrybird.jpg'
    	},
        {
            id: 1,
            src: './images/paintings/bower.jpg'
        },
        {
            id: 2,
            src: './images/paintings/doggy.jpg'
        },
        {
            id: 3,
            src: './images/paintings/iMac.jpg'
        },
        {
            id: 4,
            src: './images/paintings/interstellerShuttler.jpg'
        },
        {
            id: 5,
            src: './images/paintings/messi.jpg'
        },
        {
            id: 6,
            src: './images/paintings/mikewazaki.jpg'
        },
        {
            id: 7,
            src: './images/paintings/storytree.jpg'
        },
        {
            id: 8,
            src: './images/paintings/styleMouse.jpg'
        },
        {
            id: 9,
            src: './images/paintings/winniepooh.jpg'
        },

    ],
    getAll: function() {
    	return this.paintings;
    },
    addPainting: function(painting) {
        this.paintings.push(painting);
        console.log("Finish add painting");
        this.emit('add');
    },
    initialPainting: function(paintings) {
        //this.paintings = paintings;
        //console.log("Finished initial paintings");
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