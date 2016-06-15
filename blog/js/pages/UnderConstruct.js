var React = require('react'),
    Radium = require('radium');

var styles = {
    mainArea: {
    	display: "block",
        width: "100%",
        minHeight: "500px",
        lineHeight: "500px",
        backgroundColor: "#E9EBEE",
        padding: "15px 0px",
        fontSize: "5em",
        textAlign: "center"
    },
};

var UnderConstruct = React.createClass({
    styles: styles,
    render: function() {
    	return (
            <div style={this.styles.mainArea}>
                Oops, it's not ready .
            </div>
    	);
    }
});

module.exports = UnderConstruct;