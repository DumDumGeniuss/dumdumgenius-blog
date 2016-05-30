var React = require('react');

var Footer = React.createClass({
	styles: {
        footer: {
            position: "fixed",
            width: "100%",
            bottom: "0px",
            height: "50px",
            backgroundColor: "#42ABC4"
        }
	},
	render: function() {
		return (
			<footer style={this.styles.footer}>
			    It's Footer
			</footer>
		);
	}
});

module.exports = Footer;