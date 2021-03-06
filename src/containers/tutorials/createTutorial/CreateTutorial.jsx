import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as articleActions from '../../../actions/articleActions'

class CreateTutorial extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: null,
            content: null,
            category: null,
            sequence: null,
            create_at: new Date(),
            update_at: new Date()
        }
    }
    createArticle() {
        let { actions } = this.props,
            self = this,
            params = {
                title: self.state.title,
                category: self.state.category,
                content: self.state.content,
                sequence: parseInt(self.state.sequence, 10),
                create_at: self.state.create_at,
                update_at: self.state.update_at
            }
        articleActions.addArticle(params)
        self.props.history.push('/tutorials');
    }
    handleCategoryChange(event) {
    	this.setState({
            category: event.target.value
    	})
    }
    handleTitleChange(event) {
    	this.setState({
            title: event.target.value
    	})
    }
    handleContentChange(event) {
    	this.setState({
            content: event.target.value
    	})
    }
    handleSequenceChange(event) {
        this.setState({
            sequence: event.target.value
        })
    }
    render() {
        const style = require('./CreateTutorial.scss')
    	return (
    		<div>
    		    <div>
                    <span className={style.title}><b>Create New Tutorial!</b></span>
    		        <div>
    		            <label className={style.inputLabel}>category</label>
    		            <input className={style.input} onChange={this.handleCategoryChange.bind(this)}></input>
    		        </div>
    		        <div>
    		            <label className={style.inputLabel}>title</label>
    		            <input className={style.input} onChange={this.handleTitleChange.bind(this)}></input>
    		        </div>
                    <div>
                        <label className={style.inputLabel}>Sequence</label>
                        <input className={style.input} onChange={this.handleSequenceChange.bind(this)}></input>
                    </div>
    		        <div>
    		            <label className={style.inputLabel}>content</label>
                        <textarea className={style.textInput} onChange={this.handleContentChange.bind(this)}></textarea>
                    </div>
                    <div>
                        <button className={style.submitButton} onClick={this.createArticle.bind(this)}>submit</button>
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
    actions: bindActionCreators(articleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTutorial)
