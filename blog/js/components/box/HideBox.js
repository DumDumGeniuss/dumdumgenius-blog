var React = require('react');
var Radium = require('radium');

var HideBox = React.createClass({
    getInitialState: function() {
        return {
            showBox: 'hidden'
        };
    },
    hideBox: function() {
         this.setState({showBox: !this.state.showBox});
    },
	styles: {
        box: {
            display: "block",
            padding: "10px 0px",
            margin: "0px auto",
            backgroundColor: "#CCCCCC",
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
	},
	render: function() {
		return (
			<div style={Object.assign(this.styles.box , {width: this.props.width?this.props.width:"100%"})} display={this.state.showBox}>
                {this.props.children}
			</div>
		);
	}
});

module.exports = Radium(HideBox);