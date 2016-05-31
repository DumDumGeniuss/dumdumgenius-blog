var React = require('react');

var Navbar = React.createClass({
	styles: {
		backgroundArea: {
            width: "100%",
            height: "300px"
		},
		mainBackground: {
            width: "100%",
            height: "300px",
            overflow: "hidden",
            backgroundImage: "url(./images/welcomeBackground2.png)",
            position: "absolute",
            zIndex: "0"
		},
		blockBackground: {
            width: "100%",
            height: "300px",
            backgroundColor: "black",
            opacity: "0.5",
            position: "absolute",
            zIndex: "1"
		},
		textArea: {
			display: "block",
			width: "100%",
            position: "absolute",
            zIndex: "2"
		},
		titleText: {
			display: "inline-block",
			width: "100%",
            fontSize: "3.5em",
            color: "white",
            fontFamily: "cursive",
            textAlign: "center",
            lineHeight: "300px"
		},
		navbar: {
            textAlign: "center",
            fontSize: "2em",
            color: "white",
            left: "0",
            lineHeight: "50px",
            backgroundColor: "black",
            width: "100%",
            borderTop: "2px solid gray"
		}
	},
	render: function() {
		return (
			<div>
			    /* Main Background */
			    <div style={this.styles.backgroundArea}>
			        <div style={this.styles.mainBackground}>
			        </div>
			        <div style={this.styles.textArea}>
			            <span style={this.styles.titleText}>DumDumGenius' House</span>
			        </div>
			        <div style={this.styles.blockBackground}>
			        </div>
			    </div>
			    <nav style={this.styles.navbar}>
			        <a>
			            It's Navbar
			        </a>
			    </nav>
			</div>
		);
	}
});

module.exports = Navbar;