var React = require('react');
var Radium = require('radium');

var styles = {
    mainArea: {
    	display: "block",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.78)"
    },
};

var Works = React.createClass({
    styles: styles,
    render: function() {
        return (
        	<div style={this.styles.mainArea}>
        	    Works
        	</div>
        );
    }
});

module.exports = Radium(Works);
