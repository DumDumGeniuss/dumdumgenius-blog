import React from 'react'
import Radium from 'radium'

class UnderConstruct extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              test: null
          };
          this.styles = styles;
    }
    render() {
    	return (
            <div style={this.styles.mainArea}>
                Oops, it's not ready ！
            </div>
    	)
    }
}

let styles = {
    mainArea: {
        display: "block",
        width: "100%",
        minHeight: "500px",
        lineHeight: "500px",
        backgroundColor: "#E9EBEE",
        padding: "15px 0px",
        fontSize: "5em",
        textAlign: "center"
    },
}

export default UnderConstruct