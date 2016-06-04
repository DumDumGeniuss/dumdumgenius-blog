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
    	width: "50%",
    	'@media (max-width: 800px)': {
    		width: "90%"
    	},
    },
    displayPhoto: {
    	width: "100%"
    }
};

var TinyPhotoBox = React.createClass({
	styles: styles,
	getInitialState: function() {
        return {
            currentShowIndex: 0,
            showPainting: null
        };
	},
	componentDidMount: function() {
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
			        <img style={Assign(this.styles.displayPhoto)} src={this.state.showPainting?this.state.showPainting.src:''}></img>
			    </div>
			</div>
		);
	}
});

module.exports = Radium(TinyPhotoBox);
