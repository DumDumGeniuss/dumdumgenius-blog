var React = require('react');
var Assign = require('object-assign');
var Radium = require('radium');
var AngleDoubleLeft = require('react-icons/lib/fa/angle-double-left');
var AngleDoubleRight = require('react-icons/lib/fa/angle-double-right');
var SeparateLine = require('../line/SeparateLine');


var styles = {
    photoBox: {
    	margin: "0px auto",
    },
    photo: {
    	display: "inline-block",
    	cursor: "pointer"
    },
    photoListScreen: {
        display: "block",
        margin: "0px auto",
        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        '@media (max-width: 800px)': {
            width: "80%",
        },
    },
    photoNav: {
    	display: "block",
        height: "60px",
        lineHeight: "60px",
        fontSize: "1.5em",
        color: "black",
        textAlign: "center"
    },
    navbarArrowLeft: {
    	display: "inline-block",
    	position: "absolute",
    	marginTop: "70px",
    	left: "10px",
        fontSize: "40px",
        color: "#CCCCCC"
    },
    navbarArrowRight: {
    	display: "inline-block",
    	position: "absolute",
    	marginTop: "70px",
    	right: "10px",
        fontSize: "40px",
        color: "#CCCCCC",
    },
    displayVideoScreen: {
    	display: "block",
    	margin: "0px auto",
        width: "320",
        backgroundColor: "#CCCCCC",
        overflowX: "hidden",
        overflowY: "hidden",
    	'@media (max-width: 800px)': {
            width: "315px",
    	},
    },
};


var TinyYoutubeBox = React.createClass({
	styles: styles,
	getInitialState: function() {
        return {
            currentShowIndex: 0,
            youtubeTitle: 'Pick the one you like !',
            playYoutubeUrl: 'https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/youtubes%2FdefaultImage.png?alt=media'
        };
	},
	componentDidMount: function() {
	},
    componentWillMount: function() {
    },
	setShowYoutube: function(key, youtubes) {
        this.setState({
        	playYoutubeUrl: youtubes[key].url,
            youtubeTitle: youtubes[key].title
        });
	},
	render: function() {
		var self = this,
		    youtubeSize = this.props.youtubeSize,
		    boxSize = this.props.boxSize,
		    youtubes = this.props.youtubes,
            youtubePhotoListSize = this.props.youtubePhotoListSize,
		    photoListScreenHeigth = youtubeSize.height;
		return (
			<div style={Assign(this.styles.photoBox, {width: boxSize.width, height: boxSize.height})}>
                <SeparateLine width="100%"/>
			    <div style={Assign(this.styles.photoListScreen, {width: youtubePhotoListSize.width})}>
                    <AngleDoubleLeft style={this.styles.navbarArrowLeft}/>
			        {youtubes.map(function(result) {
                        return <img onClick={self.setShowYoutube.bind(self, result.id, youtubes)} key={result.id} src={result.screenshot} style={Assign(self.styles.photo, {width: youtubeSize.width, height: youtubeSize.height})}></img>
			        })}
                    <AngleDoubleRight style={this.styles.navbarArrowRight}/>
			    </div>
                <SeparateLine width="100%"/>
			    <span style={this.styles.photoNav}>
			        {this.state.youtubeTitle}
			    </span>
			    <div style={this.styles.displayVideoScreen}>
                    <iframe src={this.state.playYoutubeUrl} width="320" height="240"> </iframe>
			    </div>
			</div>
		);
	}
});

module.exports = Radium(TinyYoutubeBox);
