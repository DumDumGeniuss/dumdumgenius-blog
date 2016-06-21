import React from 'react';
import Radium from 'radium';
import ObjectAssign from 'object-assign';

class SeparateLine extends React.Component {
    constructor(props) {
        super();
        this.styles = styles;
    }
    render() {
    	let width = this.props.width;
        return (
        	<div style={ObjectAssign(this.styles.separateLine, {width: width?width:"60%"})}>
        	</div>
        );
    }
};

let styles = {
    separateLine: {
        display: "block",
        margin: "10px auto",
        border: "1px solid #AAAAAA",
        '@media (max-width: 800px)': {
            display: "block",
            width: "90%",
        },
    },
};

module.exports = Radium(SeparateLine);