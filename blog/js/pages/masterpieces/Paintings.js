import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import  * as paintingActions from '../../actions/paintingActions'
import TinyPhotoBox from '../../components/box/TinyPhotoBox'
import ObjectAssign from 'object-assign'

import SeparateLine from '../../components/line/SeparateLine'


class Paintings extends React.Component {
    constructor(props) {
        super(props)
        this.styles = styles
    }
	componentDidMount() {
        this.initPaintings()
	}
    initPaintings() {
        const { actions } = this.props
        firebase.database().ref('paintings').once('value')
        .then(function(snapshot) {
            let paintings = snapshot.val();
            actions.initPaintings(paintings)
        });
    }
    render() {
        const { state } = this.props
        let paintings = state.paintings
        return (
        	<div style={this.styles.mainArea}>
                <div>
			       <TinyPhotoBox boxSize={{width: '100%', height: 'none'}} 
                                photoSize={{width: '100px', height: 'none'}} 
                                photoListSize={{width: '100%'}} 
                                paintings={paintings} />
			    </div>
        	</div>
        )
    }
}

let styles = {
    mainArea: {
        display: "block",
        width: "100%",
    }
}

function mapStateToProps(state) {
  return {
    state: state.paintings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(paintingActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Paintings)
