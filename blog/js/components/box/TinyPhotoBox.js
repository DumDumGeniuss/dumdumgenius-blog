var React = require('react');
var Assign = require('object-assign');

var styles = {
    photoBox: {
    	margin: "0px auto",
    },
    photo: {
    	display: "inline-box",
    }
};

var TinyPhotoBox = React.createClass({
	styles: styles,
	getInitialState: function() {
        return {
        };
	},
	render: function() {
		var self = this,
		    photoSize = this.props.photoSize,
		    boxSize = this.props.boxSize;
		return (
			<div style={Assign(this.styles.photoBox, {width: boxSize.width, height: boxSize.height})}>
			    {this.props.paintings.map(function(result) {
                    return <img key={result.id} src={result.src} style={Assign(self.styles.photo, {width: photoSize.width, height: photoSize.height})}></img>
			    })}
			</div>
		);
	}
});

module.exports = TinyPhotoBox;
