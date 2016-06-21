import React from 'react';
import Radium from 'radium';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.styles = styles;
    }
    render() {
    	return (
    	    <div style={this.styles.maindArea}>
                <span style={this.styles.titleFont}>Diaries</span>
                <div style={this.styles.diariesBox}>
                    {this.props.children}
                </div>
    	    </div>
    	);
    }
}

let styles = {
    maindArea: {
        display: "block",
        padding: "10px 0px",
        width: "100%",
        backgroundColor: "#E9EBEE"
    },
    titleFont: {
        display: "block",
        padding: "20px 0px 0px 0px",
        textAlign: "center",
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: "3em"
    },
    diariesBox: {
        width: "90%",
        margin: "0px auto",
        minHeight: "70%"
        //backgroundColor: "white",
        //border: "1px solid black"

    }
};

module.exports = Radium(Layout);