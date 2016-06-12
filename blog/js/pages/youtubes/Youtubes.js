var React = require('react');
var Radium = require('radium');

var TinyYoutubeBox = require('../../components/box/TinyYoutubeBox');
var YoutubeStore = require('../../stores/YoutubeStore');
var YoutubeActions = require('../../actions/YoutubeActions');
var ObjectAssign = require('object-assign');

var SeparateLine = require('../../components/line/SeparateLine');

var styles = {
    mainArea: {
        display: "block",
        width: "100%",
    }
};

var Youtubes = React.createClass({
    styles: styles,
    getInitialState: function() {
        return {
            Youtubes: []
        };
    },
    componentWillMount: function() {
        YoutubeStore.on('add', this.getYoutubes);
        YoutubeStore.on('init', this.getYoutubes);
    },
    componentDidMount: function() {
        this.initYoutube();
    },
    componentWillUnmount: function() {
        YoutubeStore.removeListener('add', this.getYoutubes);
        YoutubeStore.removeListener('init', this.getYoutubes);
    },
    initYoutube: function() {
        YoutubeActions.initYoutubes();
    },
    getYoutubes: function() {
        this.setState({
            Youtubes: YoutubeStore.getAll()
        });
    },
    render: function() {
        return (
        	<div style={this.styles.mainArea}>
                <TinyYoutubeBox boxSize={{width: '100%', height: 'none'}} youtubeSize={{width: '150px', height: 'none'}} youtubePhotoListSize={{width: '100%'}} youtubes={this.state.Youtubes}/>
        	</div>
        );
    }
});

module.exports = Radium(Youtubes);
