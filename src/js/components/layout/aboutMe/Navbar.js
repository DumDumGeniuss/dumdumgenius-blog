var React = require('react');
var {Link} = require('react-router');


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
            opacity: "0.7",
            position: "absolute",
            zIndex: "1"
		},
		textArea: {
			display: "block",
			width: "100%",
            position: "absolute",
            zIndex: "2"
		},
		logoText: {
            position: "absolute",
			display: "inline-block",
			padding: "10px",
            fontSize: "2em",
            fontFamily: "cursive",
            color: "white",
		},
		centerText: {
            position: "absolute",
			display: "inline-block",
			width: "100%",
            fontSize: "1.5em",
            color: "white",
            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
            textAlign: "center",
            lineHeight: "300px",
            wordWrap: "break-word"
		},
		navbar: {
            textAlign: "center",
            fontSize: "1.5em",
            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
            color: "white",
            left: "0",
            lineHeight: "50px",
            backgroundColor: "black",
            width: "100%",
            borderTop: "2px solid gray"
		},
		navbarItem: {
			color: "white",
			display: "inline-block",
			width: "200px",
			cursor: "pointer"
		}
	},
	render: function() {
		return (
			<div>
			    <div style={this.styles.backgroundArea}>
			        <div style={this.styles.mainBackground}>
			        </div>
			        <div style={this.styles.textArea}>
			            <span style={this.styles.logoText}>DumDumGenius</span>
			            <span style={this.styles.centerText}>Fullstacker Developer</span>
			        </div>
			        <div style={this.styles.blockBackground}>
			        </div>
			    </div>
			    <nav style={this.styles.navbar}>
			        <Link style={this.styles.navbarItem} to="/">About me</Link>
			        <Link style={this.styles.navbarItem} to="/">Masterpices</Link>
			        <Link style={this.styles.navbarItem} to="/">My websites</Link>
			        <Link style={this.styles.navbarItem} to="/">Tutorials</Link>
			        <Link style={this.styles.navbarItem} to="/">Journals</Link>
			    </nav>
			</div>
		);
	}
});

module.exports = Navbar;