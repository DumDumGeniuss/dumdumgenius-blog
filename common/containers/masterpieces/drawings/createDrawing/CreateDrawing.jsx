import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as drawingsActions from '../../../../actions/drawingsActions'


if (process.env.BROWSER) {
    require('./CreateDrawing.css')
}

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
                    //     <label className="CreateDrawing-inputLabel">Sequence</label>
                    //     <input className="CreateDrawing-input" onChange={this.handleSequenceChange.bind(this)}></input>
                    // </div>
    render() {
        return (
            <div>
                <div>
                    <span className="CreateDrawing-title"><b>Create New Drawing!</b></span>
                    <div>
                        <label className="CreateDrawing-inputLabel">content</label>
                        <textarea className="CreateDrawing-textInput" onChange={this.handleContentChange.bind(this)}></textarea>
                    </div>
                    <div>
                        <label className="CreateDrawing-inputLabel">drawing</label>
                        <input className="CreateDrawing-input" type="file" name="drawing" id="drawing" accept="image/*" />
                    </div>
                    <div>
                        <button className="CreateDrawing-submitButton" onClick={this.createDrawing.bind(this)}>submit</button>
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
