var React = require('react');

var Footer = React.createClass({
	styles: {
        footer: {
            width: "100%",
            height: "50px",
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
            lineHeight: "50px",
            fontSize: "1em"
        }
	},
	render: function() {
		return (
			<footer style={this.styles.footer}>
			    Copyright © DumDumGenius 2016
			</footer>
		);
	}
});

module.exports = Footer;