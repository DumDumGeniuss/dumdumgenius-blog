var React = require('react');
var Navbar = require('./Navbar.js');
var Footer = require('./footer.js');

var Layout = React.createClass({
	styles: {
        mainDiv: {
        }
	},
	render: function() {
		return (
            <div>
                <Navbar />
                <div style={this.styles.mainDiv}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
   		);
	}
});

module.exports = Layout;
