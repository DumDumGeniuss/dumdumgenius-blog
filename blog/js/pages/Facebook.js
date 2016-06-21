var React = require('react');
var ObjectAssign = require('object-assign');

class Facebook extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              test: null
          };
          this.styles = styles;
    }
	componentWillMount() {
	}
	componentDidMount() {
		let provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            let token = result.credential.accessToken,
            // The signed-in user info.
                user = result.user;
            // ...
            console.log(result);
        }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code,
                errorMessage = error.message,
            // The email of the user's account used.
                email = error.email,
            // The firebase.auth.AuthCredential type that was used.
                credential = error.credential;
            // ...
        });
	}
	render() {
		return (
			<div style={this.styles.mainArea}>
			    Facebook!!!
			</div>
		);
	}
};

let styles = {
    mainArea: {
    }
};

module.exports = Facebook;