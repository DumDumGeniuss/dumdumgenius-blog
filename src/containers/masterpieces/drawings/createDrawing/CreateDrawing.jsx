import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as drawingsActions from '../../../../actions/drawingsActions'

class CreateDrawing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: null,
            create_at: new Date(),
            update_at: new Date()
        }
    }
    createDrawing() {
        let { actions } = this.props,
            self = this,
            params = {
                content: self.state.content,
                drawing: document.getElementById('drawing').files[0],
                create_at: self.state.create_at,
                update_at: self.state.update_at
            }
        drawingsActions.addDrawing(params)
        drawingsActions.queryDrawings()
        self.props.history.push('/masterpieces/drawings');
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
                    // <div>
                    //     <label className={style.inputLabel">Sequence</label>
                    //     <input className={style.input" onChange={this.handleSequenceChange.bind(this)}></input>
                    // </div>
    render() {
        const style = require('./CreateDrawing.scss')
        return (
            <div>
                <div>
                    <span className={style.title}><b>Create New Drawing!</b></span>
                    <div>
                        <label className={style.inputLabel}>content</label>
                        <textarea className={style.textInput} onChange={this.handleContentChange.bind(this)}></textarea>
                    </div>
                    <div>
                        <label className={style.inputLabel}>drawing</label>
                        <input className={style.input} type="file" name="drawing" id="drawing" accept="image/*" />
                    </div>
                    <div>
                        <button className={style.submitButton} onClick={this.createDrawing.bind(this)}>submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateDrawing)
