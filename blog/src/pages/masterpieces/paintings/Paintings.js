import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import  * as paintingActions from '../../../actions/paintingActions'
import TinyPhotoBox from '../../../components/box/tinyPhotoBox/TinyPhotoBox'


class Paintings extends React.Component {
    constructor(props) {
        super(props)
    }
	componentWillMount() {
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
        	<div className="Paintings-mainArea">
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

function mapStateToProps(state) {
  return {
    state: state.paintings
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(paintingActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paintings)
