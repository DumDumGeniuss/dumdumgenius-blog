var React = require('react');

var TinyPhotoBox = require('../../components/box/TinyPhotoBox');
var PaintingStore = require('../../stores/PaintingStore');
var PaintingActions = require('../../actions/PaintingActions');
var ObjectAssign = require('object-assign');

var SeparateLine = require('../../components/line/SeparateLine');


var styles = {
    mainArea: {
    	display: "block",
        width: "100%",
    }
};

var Paintings = React.createClass({
    styles: styles,
	getInitialState: function() {
        return {
        	paintings: []
        };
	},
	componentWillMount: function() {
		PaintingStore.on('add', this.getPaintings);
		PaintingStore.on('init', this.getPaintings);
	},
	componentDidMount: function() {
        this.initPainting();
	},
    componentWillUnmount: function() {
        PaintingStore.removeListener('add', this.getPaintings);
        PaintingStore.removeListener('init', this.getPaintings);
    },
	initPainting: function() {
        PaintingActions.initPainting();
	},
    getPaintings: function() {
        this.setState({
            paintings: PaintingStore.getAll()
        });
    },
    render: function() {
        return (
        	<div style={this.styles.mainArea}>
                <div>
			       <TinyPhotoBox boxSize={{width: '100%', height: 'none'}} photoSize={{width: '100px', height: 'none'}} photoListSize={{width: '65%'}} paintings={this.state.paintings}/>
			    </div>
        	</div>
        );
    }
});

module.exports = Paintings;
