var React = require('react');
var Radium = require('radium');

var SeparateLine = React.createClass({
    styles: {
        separateLine: {
        	display: "block",
        	width: "60%",
        	margin: "0px auto",
        	border: "1px solid white",
            '@media (max-width: 800px)': {
                display: "block",
        	    width: "90%",
            },
        },
    },
    render: function() {
        return (
        	<div style={this.styles.separateLine}>
        	</div>
        );
    }
});

module.exports = Radium(SeparateLine);