var React = require('react');

var Demo = React.createClass({
	styles: {
        mainArea: {
        }
	},
	render: function() {
		return (
			<div style={this.styles.mainArea}>
			    <p>Hello</p>
			</div>
		);
	}
});

module.exports = Demo;