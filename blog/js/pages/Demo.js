import React from 'react';
import ObjectAssign from 'object-assign';
import ReactFireMixin from 'reactfire';
//var Firebase from 'firebase');

class Demo extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            resizeWidth: 0
        };
        this.styles = styles;
    }
	componentWillMount() {
        // var self = this;
        // firebase.storage().ref('logos').child("TCFSHLogo.png").getDownloadURL()
        // .then(function(url) {
        //     console.log(url);
        // });
        // console.log(firebase.storage().ref('paintings').fullPath);
	}
	componentDidMount() {
		// firebase.database().ref('test').once('value')
		// .then(function(snapshot) {
  //           console.log(snapshot.val());
		// });
		// firebase.storage().ref().child('welcomeBackground2.jpg').getDownloadURL()
		// .then(function(url) {
  //           console.log(url);
		// });
	}
	render() {
		return (
			<div style={this.styles.mainArea}>
                <a href="javascript: void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent('http://dumdumgeniuss.github.io/blog/#/diaries?_k=ofzxcg'))));">生日快樂！</a>
			</div>
		);
	}
};

let styles = {
    mainArea: {
    }
};


module.exports = Demo;