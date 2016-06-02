var Radium = require('radium');
var React = require('react');
var {Link} = require('react-router');
var RadiumLink = Radium(Link); //Awesome!!

var styles = {
	backgroundArea: {
        width: "100%",
        height: "300px"
	},
	backgroundAreaHigh: {
        width: "100%",
        height: "350px",
        backgroundColor: "black",
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
        fontSize: "1.8em",
        color: "white",
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
        textAlign: "center",
        lineHeight: "300px",
        wordWrap: "break-word"
	},
	navbar: {
        textAlign: "center",
        left: "0px",
        lineHeight: "50px",
        backgroundColor: "black",
        width: "100%",
        borderTop: "2px solid gray"
	},
	navbarFixed: {
		position: "fixed",
		left: "0px",
		top: "0px",
        textAlign: "center",
        lineHeight: "50px",
        backgroundColor: "rgba(0, 0, 0, 0.68)",
        width: "100%",
	},
	navbarItem: {
		color: "white",
		display: "inline-block",
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: "1.2em",
		width: "200px",
		cursor: "pointer",
        ':hover': {
            color: "#F1FF5A"
        },
	}
}

var Navbar = React.createClass({
	styles: styles,
	getInitialState: function() {
		return {
            scrollTop: 0,
		};
	},
	componentDidMount: function() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    },
    
    componentWillUnmount: function() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    },
    componentWillUnmount: function() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    },
    handleScroll: function(event) {
        this.setState({
            scrollTop: event.srcElement.body.scrollTop
        });
    },
	render: function() {
		return (
			<div>
			    <div style={this.state.scrollTop<300?this.styles.backgroundArea:this.styles.backgroundAreaHigh}>
			        <div style={this.styles.mainBackground}>
			        </div>
			        <div style={this.styles.textArea}>
			            <span style={this.styles.logoText}>DumDumGenius</span>
			            <span style={this.styles.centerText}>Fullstack Developer</span>
			        </div>
			        <div style={this.styles.blockBackground}>
			        </div>
			    </div>
			    <nav style={this.state.scrollTop<300?this.styles.navbar:this.styles.navbarFixed}>
			        <RadiumLink style={this.styles.navbarItem} to="/">About me</RadiumLink>
			        <RadiumLink style={this.styles.navbarItem} to="/">Masterpieces</RadiumLink>
			        <RadiumLink style={this.styles.navbarItem} to="/">Tutorials</RadiumLink>
			        <RadiumLink style={this.styles.navbarItem} to="/">Notes</RadiumLink>
			    </nav>
			</div>
		);
	}
});


module.exports = Radium(Navbar);