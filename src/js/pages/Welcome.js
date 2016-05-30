var React = require('react');
var Layout = require('../components/layout/welcome/Layout.js');

var Welcome = React.createClass({
	render: function() {
		return (
			<Layout>
			    <p>
			        Hello!!!
			    </p>
			</Layout>
		)
	}
});

module.exports = Welcome;