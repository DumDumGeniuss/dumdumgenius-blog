var React = require('react'),
    Radium = require('radium'),
    PaintBrush = require('react-icons/lib/fa/paint-brush'),
    YoutubePlay = require('react-icons/lib/fa/youtube-play'),
    ObjectAssign = require('object-assign'),
    {Link} = require('react-router'),
    RadiumLink = Radium(Link); //Awesome!!

var styles = {
	maindArea: {
    	display: "block",
        width: "100%",
        backgroundColor: "#E9EBEE"
	},
	navbar: {
		display: "block",
        width: "70%",
        margin: "0px auto",
        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
	},
	pageArea: {
        padding: "10px 0px",
	},
    masterpieceIcon: {
        display: "inline-block",
        color: "#777777",
        fontSize: "50px",
    },
    masterpieceIconText: {
    	display: "block",
    	padding: "10px 0px 0px 0px",
    	color: "black",
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
    	fontSize: "1em"
    },
    masterpieceShowBox: {
        display: "inline-block",
        width: "90px",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
    },
};

var Layout = React.createClass({
    styles: styles,
    render: function() {
    	return (
    	    <div style={this.styles.maindArea}>
    	        <div style={this.styles.navbar}>
                    <RadiumLink style={this.styles.masterpieceShowBox} to="/masterpieces">
                        <PaintBrush style={ObjectAssign(this.styles.masterpieceIcon)}/> 
                        <span style={this.styles.masterpieceIconText}>Paintings</span>
                    </RadiumLink>
                    <RadiumLink style={this.styles.masterpieceShowBox} to="/masterpieces/youtubes">
                        <YoutubePlay style={this.styles.masterpieceIcon}/> 
                        <span style={this.styles.masterpieceIconText}>Youtube</span>
                    </RadiumLink>
                </div>
                <div style={this.styles.pageArea}>
                    {this.props.children}
                </div>
    	    </div>
    	);
    }
});

module.exports = Radium(Layout);