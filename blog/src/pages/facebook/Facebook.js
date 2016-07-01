import React from 'react'
import firebase from '../../services/firebase'

class Facebook extends React.Component {
    constructor(props) {
          super(props)
          this.state = {
              test: null
          }
    }
	componentWillMount() {
	}
	componentDidMount() {
		let provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithRedirect(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            let token = result.credential.accessToken,
            // The signed-in user info.
                user = result.user
            // ...
            console.log(result)
        }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code,
                errorMessage = error.message,
            // The email of the user's account used.
                email = error.email,
            // The firebase.auth.AuthCredential type that was used.
                credential = error.credential
            // ...
        })
	}
	render() {
		return (
			<div>
			    Facebook!!!
			</div>
		)
	}
}

module.exports = Facebook