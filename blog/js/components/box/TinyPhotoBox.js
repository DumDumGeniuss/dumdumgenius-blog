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
    displayScreen: {
    	display: "block",
    	margin: "0px auto",
        height: "400px",
        overflowX: "hidden",
        overflowY: "hidden",
    	'@media (max-width: 800px)': {
            height: "250px",
    	},
    },
    displayPhoto: {
    	height: "100%",
        marginLeft: "50%",
        border: "1px solid black",
        backgroundColor: "#EFEFEF",
        transform: "translate(-50%, 0%)",
    },
};


var TinyPhotoBox = React.createClass({
	styles: styles,
	getInitialState: function() {
        return {
            currentShowIndex: 0,
            showPainting: null,
            paintingTitle: 'Pick the one you like !',
            defaultImageUrl: 'https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/paintings%2FdefaultImage.png?alt=media'
        };
	},
	componentDidMount: function() {
	},
    componentWillMount: function() {
    },
	setShowPainting: function(key, paintings) {
        this.setState({
        	showPainting: paintings[key],
            paintingTitle: paintings[key].title
        });
	},
	render: function() {
		var self = this,
		    photoSize = this.props.photoSize,
		    boxSize = this.props.boxSize,
		    paintings = this.props.paintings,
            photoListSize = this.props.photoListSize,
		    photoListScreenHeigth = photoSize.height;
		return (
			<div style={Assign(this.styles.photoBox, {width: boxSize.width, height: boxSize.height})}>
                <SeparateLine width="100%"/>
			    <div style={Assign(this.styles.photoListScreen, {width: photoListSize.width})}>
                    <AngleDoubleLeft style={this.styles.navbarArrowLeft}/>
			        {paintings.map(function(result) {
                        return <img onClick={self.setShowPainting.bind(self, result.id, paintings)} key={result.id} src={result.src} style={Assign(self.styles.photo, {width: photoSize.width, height: photoSize.height})}></img>
			        })}
                    <AngleDoubleRight style={this.styles.navbarArrowRight}/>
			    </div>
                <SeparateLine width="100%"/>
			    <span style={this.styles.photoNav}>
			        {this.state.paintingTitle}
			    </span>
			    <div style={this.styles.displayScreen}>
                    <img style={this.styles.displayPhoto} src={this.state.showPainting?this.state.showPainting.src:this.state.defaultImageUrl}></img>
			    </div>
			</div>
		);
	}
});

module.exports = Radium(TinyPhotoBox);
