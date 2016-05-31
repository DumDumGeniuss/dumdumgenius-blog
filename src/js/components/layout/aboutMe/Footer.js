var React = require('react');

var Footer = React.createClass({
	styles: {
        footer: {
            position: "fixed",
            width: "100%",
            bottom: "0px",
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
			    Copyright DumDumGenius 2015
			</footer>
		);
	}
});

module.exports = Footer;