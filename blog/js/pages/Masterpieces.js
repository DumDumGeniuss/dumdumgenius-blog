var React = require('react');
var Radium = require('radium');
var HideBox = require('../components/box/HideBox.js');
var PaintBrush = require('react-icons/lib/fa/paint-brush');
var YoutubePlay = require('react-icons/lib/fa/youtube-play');

var TinyPhotoBox = require('../components/box/TinyPhotoBox');
var PaintingStore = require('../stores/PaintingStore');
var PaintingActions = require('../actions/PaintingActions');
var ObjectAssign = require('object-assign');

var SeparateLine = require('../components/line/SeparateLine');


var styles = {
    mainArea: {
    	display: "block",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.78)"
    },
    workShowBox: {
        display: "inline-block",
        width: "90px",
        padding: "10px",
        margin: "10px",
        cursor: "pointer"
    },
    workIcon: {
        display: "inline-block",
        color: "white",
        fontSize: "70px",
    },
    workIconText: {
    	display: "block",
    	padding: "10px 0px 0px 0px",
    	color: "white",
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
    	fontSize: "1.2em"
    }
};

var Masterpieces = React.createClass({
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
                <HideBox width="60%">
                    <div style={this.styles.workShowBox}>
                        <PaintBrush style={ObjectAssign(this.styles.workIcon)}/> 
                        <span style={this.styles.workIconText}>Paintings</span>
                    </div>
                    <div style={this.styles.workShowBox}>
                        <YoutubePlay style={this.styles.workIcon}/> 
                        <span style={this.styles.workIconText}>Youtube</span>
                    </div>
                </HideBox>
                <SeparateLine />
                <div>
			       <TinyPhotoBox boxSize={{width: '100%', height: 'none'}} photoSize={{width: '150px', height: 'none'}} paintings={ObjectAssign(this.state.paintings)}/>
			    </div>
        	</div>
        );
    }
});

module.exports = Radium(Masterpieces);
