import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as drawingsActions from '../../../../actions/drawingsActions'
import {Link} from 'react-router'
import Star from 'react-icons/lib/fa/star'
import Bans from 'react-icons/lib/fa/ban'
import PlusSquare from 'react-icons/lib/fa/plus-square'
import SimplePhotoBox from '../../../../components/box/simplePhotoBox/SimplePhotoBox.jsx'

class Drawings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentWillMount() {
        const { actions, location, params, state } = this.props
        if(state.drawings.drawings.length == 0) {
            actions.queryDrawings()
        }
    }
    componentWillReceiveProps(nextProps) {
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    deleteDrawing(id) {
        const { actions } = this.props
        actions.deleteDrawing(id)
    }
    render() {
        let self = this
        const style = require('./Drawings.scss')

        //Redux
        let { state, location } = self.props
        let drawings = state.drawings.drawings || []
        let superMode = location.query.super
        console.log(superMode)
        return (
            <div className={style.mainArea}>
                <div className={style.displayPhotos}>
                    <Link className={style.addPhoto} to={'/masterpieces/drawings/create'} style={ {display: superMode?'initial':'none'} }>
                        <PlusSquare />
                    </Link>
                    <div className={style.photosArea}>
                        {
                            drawings.map( (item) => {
                                return (
                                    <SimplePhotoBox onClick={ self.deleteDrawing.bind(self, item._id) } key={item._id} photo={item}>
                                        <Bans onClick={ self.deleteDrawing.bind(self, item._id) } style={ {display: superMode?'initial':'none'} }/>
                                    </SimplePhotoBox>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}



function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(drawingsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawings)
