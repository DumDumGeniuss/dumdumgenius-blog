var React = require('react');
var ObjectAssign = require('object-assign');

var Facebook = React.createClass({
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
	},
	componentDidMount: function() {
		var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
          console.log(result);
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
	},
	render: function() {
		return (
			<div style={this.styles.mainArea}>
			    Facebook!!!
			</div>
		);
	}
});

module.exports = Facebook;