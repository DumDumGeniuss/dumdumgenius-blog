var Radium = require('radium');
var React = require('react');
var {Link} = require('react-router');
var RadiumLink = Radium(Link); //Awesome!!
var Facebook = require('react-icons/lib/fa/facebook');
var Github = require('react-icons/lib/fa/github');
var Twitter = require('react-icons/lib/fa/twitter');
var Google = require('react-icons/lib/fa/google');

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
    logoArea: {
        position: "absolute",
        top: "240px",
        right: "30px",
        display: "block",
        width: "172px",
        margin: "0px auto",
        '@media (max-width: 800px)': {
            right: "calc(50% - 86px)",
        },
    },
    faIcon: {
        color: "white",
        fontSize: "34px",
        padding: "4px",
        margin: "4px",
        display: "inline-block",
        height: "35px",
        width: "35px",
        border: "1px solid white",
        borderRadius: "35px"
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
            navbarClass: this.styles.navbar,
            backgroundAreaClass: this.styles.backgroundArea
		};
	},
	componentDidMount: function() {
        window.addEventListener('scroll', this.handleScroll);
    },
    
    componentWillUnmount: function() {
        window.addEventListener('scroll', this.handleScroll);
    },
    componentWillUnmount: function() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    handleScroll: function(event) {
        this.setState({
            scrollTop: event.srcElement.body.scrollTop
        });

        if(this.state.scrollTop<300) {
            if(this.state.navbarClass !== this.styles.navbar) {
                this.setState({
                    navbarClass: this.styles.navbar
                });
            }
            if(this.state.backgroundAreaClass !== this.styles.backgroundArea) {
                this.setState({
                    backgroundAreaClass: this.styles.backgroundArea
                });
            }
        }else if(this.state.scrollTop>300) {
            if(this.state.navbarClass !== this.styles.navbarFixed) {
                this.setState({
                    navbarClass: this.styles.navbarFixed
                });
            }
            if(this.state.backgroundAreaClass !== this.styles.backgroundAreaHigh) {
                this.setState({
                    backgroundAreaClass: this.styles.backgroundAreaHigh
                });
            }
        }
    },
	render: function() {
		return (
			<div>
			    <div style={this.state.backgroundAreaClass}>
			        <div style={this.styles.mainBackground}>
			        </div>
			        <div style={this.styles.textArea}>
			            <span style={this.styles.logoText}>DumDumGenius</span>
			            <span style={this.styles.centerText}>Fullstack Developer</span>
                        <div style={this.styles.logoArea}>
                            <Facebook style={this.styles.faIcon}/>
                            <Github style={this.styles.faIcon}/>
                            <Twitter style={this.styles.faIcon}/>
                            <Google style={this.styles.faIcon}/>
                        </div>
			        </div>
			        <div style={this.styles.blockBackground}>
			        </div>
			    </div>
			    <nav style={this.state.navbarClass}>
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