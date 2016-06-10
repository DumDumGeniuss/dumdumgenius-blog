var React = require('react');
var ObjectAssign = require('object-assign');
var ReactFireMixin = require('reactfire');
//var Firebase = require('firebase');

var Demo = React.createClass({
	mixins: [ReactFireMixin],
	styles: {
        mainArea: {
        }
	},
	getInitialState: function() {
		return {
            test: null
		};
	},
	componentWillMount: function() {
        var self = this;
        firebase.storage().ref('logos').child("TCFSHLogo.png").getDownloadURL()
        .then(function(url) {
            console.log(url);
        });
        console.log(firebase.storage().ref('paintings').fullPath);
	},
	componentDidMount: function() {
		// firebase.database().ref('test').once('value')
		// .then(function(snapshot) {
  //           console.log(snapshot.val());
		// });
		// firebase.storage().ref().child('welcomeBackground2.jpg').getDownloadURL()
		// .then(function(url) {
  //           console.log(url);
		// });
	},
	render: function() {
		return (
			<div style={this.styles.mainArea}>
			    Test it!!!
			</div>
		);
	}
});

module.exports = Demo;