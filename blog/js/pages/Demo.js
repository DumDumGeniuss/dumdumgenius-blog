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
	}
	componentDidMount() {
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