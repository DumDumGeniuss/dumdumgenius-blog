var React = require('react');
var Radium = require('radium');

var pulseKeyframes = Radium.keyframes({
  '0%': {color: 'yellow'},
  '50%': {color: 'black'},
  '100%': {color: 'red'},
}, 'pulse');

var styles = {
    mainArea: {
    	animation: 'x 3s ease 0s infinite',
    	display: "block",
        width: "100%",
        animationName: pulseKeyframes
    }
};

var Youtubes = React.createClass({
    styles: styles,
	getInitialState: function() {
        return {
        };
	},
	componentWillMount: function() {
	},
	componentDidMount: function() {
	},
	initPainting: function() {
	},
    render: function() {
        return (
        	<div style={this.styles.mainArea}>
        	    youtubes
        	</div>
        );
    }
});

module.exports = Radium(Youtubes);
