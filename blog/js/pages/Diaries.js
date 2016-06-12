var React = require('react'),
    Radium = require('radium'),
    style;



style = {
    mainArea: {
    	display: "block",
        width: "100%",
        backgroundColor: "#E9EBEE",
        padding: "15px 0px"
    }
}

var Diaries = React.createClass({
	render: function() {
        return (
            <p>
                Hello!
            </p>
        );
	}
});

module.exports = Diaries;