var React = require('react');

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
            margin: "0px auto"
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

module.exports = HideBox;