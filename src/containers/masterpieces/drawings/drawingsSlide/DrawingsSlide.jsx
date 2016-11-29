import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as drawingsActions from '../../../../actions/drawingsActions'
import config from '../../../../constants/config'
import {Link} from 'react-router'
import AngleRight from 'react-icons/lib/fa/angle-right'
import AngleLeft from 'react-icons/lib/fa/angle-left'

class DrawingsSlide extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drawingSelected: null
        }
        // this.getPhotoIndexById = this.getPhotoIndexById.bind(this)
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
    getDrawingIndexById(id, drawings) {
        let res;
        for(let i = 0; i < drawings.length; i++) {
            drawings[i].show = 'none'
            if(drawings[i]._id == id) {
                drawings[i].show = 'inline-block'
                res = i
            }
        }
        return res
    }
    render() {
        let self = this
        const style = require('./DrawingsSlide.scss')

        //Redux
        let { state, location } = self.props
        let drawings = state.drawings.drawings || []
        let drawingId = location.query.drawingId
        let drawingSelected = self.getDrawingIndexById(drawingId, drawings)
        let prevDrawingId = drawings[drawingSelected - 1]?drawings[drawingSelected - 1]._id:''
        let nextDrawingId = drawings[drawingSelected + 1]?drawings[drawingSelected + 1]._id:''

        return (
            <div className={style.mainArea}>
                <Link to={"/masterpieces/drawings/slideShow?drawingId=" + prevDrawingId} style={ {display: prevDrawingId?'inline':'none', cursor: 'pointer'} }>
                    <div className={style.buttonArea + " " + style.leftButtonArea}>
                        <AngleLeft className={style.angle + " " + style.angleLeft}/>
                    </div>
                </Link>
                <Link to={"/masterpieces/drawings/slideShow?drawingId=" + nextDrawingId} style={ {display: nextDrawingId?'inline':'none', cursor: 'pointer'} }>
                    <div className={style.buttonArea + " " + style.rightButtonArea}>
                        <AngleRight className={style.angle + " " + style.angleRight}/>
                    </div>
                </Link>
                <Link to="/masterpieces/drawings" style={ {cursor: "pointer"} }>
                    <div className={style.blackCanvas}>
                    </div>
                </Link>
                <div className={style.photosArea}>
                    {
                        drawings.map( (item) => {
                            return (
                                <img key={item._id} className={style.photo} src={config.apiUrl + '/files/drawings/' + item.fileName} style={ {display: item.show} }/>
                            )
                        })
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(DrawingsSlide)
