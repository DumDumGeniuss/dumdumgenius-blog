var React = require('react');

var Navbar = React.createClass({
	styles: {
		mainBackground: {
            width: "100%",
            height: "400px",
            overflow: "hidden",
            backgroundImage: "url(./images/welcomeBackground1.png)"
		},
		titleText: {
			display: "block",
            fontSize: "3.5em",
            color: "white",
            fontFamily: "cursive",
            textAlign: "center",
            lineHeight: "400px"
		},
		navbar: {
            textAlign: "center",
            fontSize: "2em",
            color: "white",
            position: "relative",
            height: "50px",
            bottom: "50px",
            left: "0",
            lineHeight: "50px",
            backgroundColor: "rgba(199, 199, 199, 0.41)",
            width: "100%"
		}
	},
	render: function() {
		return (
			<div>
			    <div style={this.styles.mainBackground}>
			        <span style={this.styles.titleText}>DumDumGenius' House</span>
			    </div>
			    <nav style={this.styles.navbar}>
			        <a>
			            It's Navbar
			        </a>
			        <a>
			            It's Navbar
			        </a>
			    </nav>
			</div>
		);
	}
});

module.exports = Navbar;