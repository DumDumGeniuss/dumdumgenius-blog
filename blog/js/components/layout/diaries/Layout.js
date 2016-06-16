var React = require('react'),
    Radium = require('radium');

var styles = {
	maindArea: {
    	display: "block",
        padding: "10px 0px",
        width: "100%",
        backgroundColor: "#E9EBEE"
	},
    titleFont: {
        display: "block",
        padding: "20px 0px",
        textAlign: "center",
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: "3em"
    },
	diariesBox: {
        width: "90%",
        margin: "0px auto",
        minHeight: "70%"
        //backgroundColor: "white",
        //border: "1px solid black"

	}
};

var Layout = React.createClass({
    styles: styles,
    render: function() {
    	return (
    	    <div style={this.styles.maindArea}>
                <div style={this.styles.diariesBox}>
                    {this.props.children}
                </div>
    	    </div>
    	);
    }
});

module.exports = Radium(Layout);