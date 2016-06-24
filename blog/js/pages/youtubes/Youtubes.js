import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import  * as youtubeActions from '../../actions/youtubeActionss'

import TinyYoutubeBox from '../../components/box/TinyYoutubeBox';
import ObjectAssign from 'object-assign';

import SeparateLine from '../../components/line/SeparateLine';

class Youtubes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Youtubes: []
        };
        this.styles = styles;
    }
    componentDidMount() {
        this.initYoutubes()
    }
    initYoutubes() {
        const { actions } = this.props
        firebase.database().ref('youtubes').once('value')
        .then(function(snapshot) {
            let youtubes = snapshot.val();
            actions.initYoutubes(youtubes)
        });
    }
    render() {
        const { state } = this.props
        let youtubes = state.youtubes
        return (
        	<div style={this.styles.mainArea}>
                <TinyYoutubeBox boxSize={{width: '100%', height: 'none'}} 
                                youtubeSize={{width: '150px', height: 'none'}} 
                                youtubePhotoListSize={{width: '100%'}} 
                                youtubes={youtubes}/>
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

function mapStateToProps(state) {
  return {
    state: state.youtubes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(youtubeActions, dispatch)
  };
}

Youtubes = Radium(Youtubes);

export default connect(mapStateToProps, mapDispatchToProps)(Youtubes)
