var React = require('react');
var Radium = require('radium');
var ObjectAssign = require('object-assign');

var SeparateLine = React.createClass({
    styles: {
        separateLine: {
        	display: "block",
        	margin: "10px auto",
        	border: "1px solid #AAAAAA",
            '@media (max-width: 800px)': {
                display: "block",
        	    width: "90%",
            },
        },
    },
    render: function() {
    	var width = this.props.width;
        return (
        	<div style={ObjectAssign(this.styles.separateLine, {width: width?width:"60%"})}>
        	</div>
        );
    }
});

module.exports = Radium(SeparateLine);