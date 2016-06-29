import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import  * as youtubeActions from '../../../actions/youtubeActionss'

import TinyYoutubeBox from '../../../components/box/tinyYoutubeBox/TinyYoutubeBox';

import "./Youtubes.css"

class Youtubes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Youtubes: []
        }
    }
    componentWillMount() {
        this.initYoutubes()
    }
    initYoutubes() {
        const { actions } = this.props
        firebase.database().ref('youtubes').once('value')
        .then(function(snapshot) {
            let youtubes = snapshot.val()
            actions.initYoutubes(youtubes)
        })
    }
    render() {
        const { state } = this.props
        let youtubes = state.youtubes
        return (
        	<div className="Youtubes-mainArea">
                <TinyYoutubeBox boxSize={{width: '100%', height: 'none'}} 
                                youtubeSize={{width: '150px', height: 'none'}} 
                                youtubePhotoListSize={{width: '100%'}} 
                                youtubes={youtubes}/>
        	</div>
        );
    }
};

function mapStateToProps(state) {
  return {
    state: state.youtubes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(youtubeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Youtubes)
