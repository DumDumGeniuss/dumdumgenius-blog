import React from 'react';
import Radium from 'radium';

import TinyYoutubeBox from '../../components/box/TinyYoutubeBox';
import YoutubeStore from '../../stores/YoutubeStore';
import YoutubeActions from '../../actions/YoutubeActions';
import ObjectAssign from 'object-assign';

import SeparateLine from '../../components/line/SeparateLine';

class Youtubes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Youtubes: []
        };
        this.styles = styles;
        this.getYoutubes = this.getYoutubes.bind(this);
    }
    componentWillMount() {
        YoutubeStore.on('add', this.getYoutubes);
        YoutubeStore.on('init', this.getYoutubes);
    }
    componentDidMount() {
        this.initYoutube();
    }
    componentWillUnmount() {
        YoutubeStore.removeListener('add', this.getYoutubes);
        YoutubeStore.removeListener('init', this.getYoutubes);
    }
    initYoutube() {
        YoutubeActions.initYoutubes();
    }
    getYoutubes() {
        this.setState({
            Youtubes: YoutubeStore.getAll()
        });
    }
    render() {
        return (
        	<div style={this.styles.mainArea}>
                <TinyYoutubeBox boxSize={{width: '100%', height: 'none'}} youtubeSize={{width: '150px', height: 'none'}} youtubePhotoListSize={{width: '100%'}} youtubes={this.state.Youtubes}/>
        	</div>
        );
    }
};

let styles = {
    mainArea: {
        display: "block",
        width: "100%",
    }
};

module.exports = Radium(Youtubes);
