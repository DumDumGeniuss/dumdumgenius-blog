var React = require('react');

var AboutMe = React.createClass({
	styles: {
        mainArea: {
        	display: "block",
            width: "100%",
            height: "1000px",
            backgroundColor: "rgba(0, 0, 0, 0.78)"
        },
        titleWordBig: {
        	display: "inline-block",
        	width: "100%",
        	color: "white",
            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
        	fontSize: "2em",
        	textAlign: "center",
        	padding: "15px 0px"
        }
	},
	render: function() {
		return (
			<div style={this.styles.mainArea}>
			    <span style={this.styles.titleWordBig}>Messi Yang (DumDumGenius)</span>
			</div>
		)
	}
});

module.exports = AboutMe;