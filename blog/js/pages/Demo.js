var React = require('react');
var TinyPhotoBox = require('../components/box/TinyPhotoBox');
var PaintingStore = require('../stores/PaintingStore');
var PaintingActions = require('../actions/PaintingActions');
var ObjectAssign = require('object-assign');

var paintings = [
	{
        id: 0,
        src: './images/Java.png'
	},
	{
        id: 1,
        src: './images/javaScript.png'
	},
	{
        id: 2,
        src: './images/Ruby.png'
	},
]

var Demo = React.createClass({
	styles: {
        mainArea: {
        }
	},
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
        PaintingActions.initPainting(paintings);
	},
	render: function() {
		return (
			<div style={this.styles.mainArea}>
			    <TinyPhotoBox boxSize={{width: '70%', height: 'none'}} photoSize={{width: '200px', height: 'none'}} paintings={ObjectAssign(this.state.paintings)}/>
			</div>
		);
	}
});

module.exports = Demo;