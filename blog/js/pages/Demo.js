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
		this.firebaseRef = firebase.database().ref('test').set({
			id: 2,
			name: 'hell'
		});
	},
	componentDidMount: function() {
		firebase.database().ref('test').once('value')
		.then(function(snapshot) {
            console.log(snapshot.val());
		});
		console.log(firebase.storage().ref().child('welcomeBackground2.png').getDownloadURL());
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