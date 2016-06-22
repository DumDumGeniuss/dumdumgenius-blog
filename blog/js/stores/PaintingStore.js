import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import Assign from 'object-assign';

class PaintingStore extends EventEmitter {
    
    constructor() {
        super();
        this.paintings = [];
    }
    getAll() {
    	return this.paintings;
    }
    addPainting(painting) {
        this.paintings.push(painting);
        this.emit('add');
    }
    initialPainting(paintings) {
        var self = this;
        firebase.database().ref('paintings').once('value')
        .then(function(snapshot) {
            self.paintings = snapshot.val();
            self.emit('init');
        });
    }
    handleAction(action) {
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

};

let paintingStore = new PaintingStore;

AppDispatcher.register(paintingStore.handleAction.bind(paintingStore));

export default paintingStore;