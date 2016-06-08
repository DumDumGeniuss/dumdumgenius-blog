var React = require('react');
var Assign = require('object-assign');
var Radium = require('radium');
var AngleDoubleLeft = require('react-icons/lib/fa/angle-double-left');
var AngleDoubleRight = require('react-icons/lib/fa/angle-double-right');


var styles = {
    photoBox: {
    	margin: "0px auto",
    },
    photo: {
    	display: "inline-block",
    	cursor: "pointer"
    },
    photoListScreen: {
        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
    },
    photoNav: {
    	display: "block",
        height: "60px",
        lineHeight: "60px",
        fontSize: "1.5em",
        color: "white",
        textAlign: "center"
    },
    navbarArrowLeft: {
    	display: "inline-block",
    	position: "absolute",
    	marginTop: "70px",
    	left: "10px",
        fontSize: "40px",
        color: "white"
    },
    navbarArrowRight: {
    	display: "inline-block",
    	position: "absolute",
    	marginTop: "70px",
    	right: "10px",
        fontSize: "40px",
        color: "white",
    },
    displayScreen: {
    	display: "block",
    	margin: "0px auto",
        height: "400px",
    	'@media (max-width: 800px)': {
    		width: "90%",
            height: "300px",
    	},
    },
    displayPhoto: {
    	height: "100%",
        marginLeft: "50%",
        border: "3px solid white",
        transform: "translate(-50%, 0%)"
    },
};


var TinyPhotoBox = React.createClass({
	styles: styles,
	getInitialState: function() {
        return {
            currentShowIndex: 0,
            showPainting: null,
        };
	},
	componentDidMount: function() {
	},
    componentWillMount: function() {
    },
	setShowPainting: function(key, paintings) {
        this.setState({
        	showPainting: paintings[key]
        });
	},
	render: function() {
		var self = this,
		    photoSize = this.props.photoSize,
		    boxSize = this.props.boxSize,
		    paintings = this.props.paintings,
		    photoListScreenHeigth = photoSize.height;
		return (
			<div style={Assign(this.styles.photoBox, {width: boxSize.width, height: boxSize.height})}>
			    <div style={Assign(this.styles.photoListScreen, {height: photoListScreenHeigth})}>
                    <AngleDoubleLeft style={this.styles.navbarArrowLeft}/>
			        {paintings.map(function(result) {
                        return <img onClick={self.setShowPainting.bind(self, result.id, paintings)} key={result.id} src={result.src} style={Assign(self.styles.photo, {width: photoSize.width, height: photoSize.height})}></img>
			        })}
                    <AngleDoubleRight style={this.styles.navbarArrowRight}/>
			    </div>
			    <span style={this.styles.photoNav}>
			        Pick the one you like!
			    </span>
			    <div style={this.styles.displayScreen}>
                    <img style={this.styles.displayPhoto} src={this.state.showPainting?this.state.showPainting.src:'./images/paintings/defaultImage.png'}></img>
			    </div>
			</div>
		);
	}
});

module.exports = Radium(TinyPhotoBox);
