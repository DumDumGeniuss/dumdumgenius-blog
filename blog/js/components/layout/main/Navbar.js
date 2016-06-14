var Radium = require('radium');
var React = require('react');
var {Link} = require('react-router');
var RadiumLink = Radium(Link); //Awesome!!
var Facebook = require('react-icons/lib/fa/facebook');
var Github = require('react-icons/lib/fa/github');
var Twitter = require('react-icons/lib/fa/twitter');
var Google = require('react-icons/lib/fa/google');

var User = Radium(require('react-icons/lib/fa/user'));
var Image = Radium(require('react-icons/lib/fa/image'));
var Book = Radium(require('react-icons/lib/fa/book'));
var StickyNote = Radium(require('react-icons/lib/fa/sticky-note'));

var ObjectAssign = require('object-assign');

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
        borderRadius: "35px",
        cursor: "pointer"
    },
	navbar: {
        textAlign: "center",
        left: "0px",
        lineHeight: "50px",
        backgroundColor: "black",
        width: "100%",
        borderTop: "2px solid gray",
	},
	navbarFixed: {
		position: "fixed",
		left: "0px",
		top: "0px",
        height: "50px",
        overflow: "auto",
        textAlign: "center",
        lineHeight: "50px",
        backgroundColor: "rgba(0, 0, 0, 0.68)",
        width: "100%",
        zIndex: "2"
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
        '@media (max-width: 800px)': {
            display: "none"
        },
	},
    navbarItemCollapse: {
        color: "white",
        display: "none",
        width: "80px",
        height: "50px",
        padding: "10px 0px",
        fontSize: "30px",
        lineHeight: "50px",
        cursor: "pointer",
        ':hover': {
            color: "#F1FF5A"
        },
        '@media (max-width: 800px)': {
            display: "inline-block"
        },
    }
}

var Navbar = React.createClass({
	styles: styles,
	getInitialState: function() {
		return {
            scrollTop: 0,
            navbarClass: this.styles.navbar,
            backgroundAreaClass: this.styles.backgroundArea,
            navbarArrowUpClass: this.styles.arrowUp,
            navbarArrowDownClass: this.styles.arrowDown,
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
            if(this.state.navbarArrowUpClass !== this.styles.arrowUp){
                this.setState({
                    navbarArrowUpClass: this.styles.arrowUp
                });
                this.setState({
                    navbarArrowDownClass: this.styles.arrowDown
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
            if(this.state.navbarArrowUpClass !== this.styles.arrowUpFixed){
                this.setState({
                    navbarArrowUpClass: this.styles.arrowUpFixed
                });
                this.setState({
                    navbarArrowDownClass: this.styles.arrowDownFixed
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
                        <img src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/welcomeBackground2.jpg?alt=media"}></img>
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
			        <RadiumLink style={this.styles.navbarItem} to="/masterpieces">Masterpieces</RadiumLink>
			        <RadiumLink style={this.styles.navbarItem} to="/underConstruct">Tutorials</RadiumLink>
			        <RadiumLink style={this.styles.navbarItem} to="/diaries">Diaries</RadiumLink>
                    <RadiumLink style={this.styles.navbarItemCollapse} to="/">
                         <User />
                    </RadiumLink>
                    <RadiumLink style={this.styles.navbarItemCollapse} to="/masterpieces">
                        <Image  />
                    </RadiumLink>
                    <RadiumLink style={this.styles.navbarItemCollapse} to="/underConstruct">
                        <Book />
                    </RadiumLink>
                    <RadiumLink style={this.styles.navbarItemCollapse} to="/diaries">
                        <StickyNote />
                    </RadiumLink>
			    </nav>
			</div>
		);
	}
});


module.exports = Radium(Navbar);