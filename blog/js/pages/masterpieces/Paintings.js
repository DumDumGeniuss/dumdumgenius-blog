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
		var self = this;
		PaintingStore.on('add', function() {
            self.setState({
            	paintings: PaintingStore.getAll()
            });
		});
		PaintingStore.on('init', function() {
            self.setState({
            	paintings: PaintingStore.getAll()
            });
        });
	},
	componentDidMount: function() {
        this.initPainting();
	},
	initPainting: function() {
        PaintingActions.initPainting();
	},
    render: function() {
        return (
        	<div style={this.styles.mainArea}>
                <div>
			       <TinyPhotoBox boxSize={{width: '100%', height: 'none'}} photoSize={{width: '150px', height: 'none'}} paintings={ObjectAssign(this.state.paintings)}/>
			    </div>
        	</div>
        );
    }
});

module.exports = Paintings;
