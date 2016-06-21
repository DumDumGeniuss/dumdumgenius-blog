import React from 'react';
import Radium from 'radium';

class HideBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.styles = styles;
    }
	render() {
		return (
			<div style={Object.assign(this.styles.box , {width: this.props.width?this.props.width:"100%"})}>
                {this.props.children}
			</div>
		);
	}
};

let styles = {
    box: {
        display: "block",
        padding: "10px 0px",
        margin: "0px auto",
        backgroundColor: "white",
        border: "1px solid black",
        '@media (max-width: 800px)': {
            display: "block",
            width: "90%",
        },
    },
    boxHidden: {

    },
    hideButton: {

    }
};

module.exports = Radium(HideBox);