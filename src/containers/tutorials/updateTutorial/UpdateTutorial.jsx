import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as articleActions from '../../../actions/articleActions'


if (process.env.BROWSER) {
    require('./UpdateTutorial.css')
}

class UpdateTutorial extends React.Component {
    constructor(props) {
        super(props)
        this.inputValues
        this.state = {
            title: null,
            content: null,
            category: null,
            sequence: null,
            update_at: new Date()
        }
    }
    componentWillMount() {
        const { actions, location, params } = this.props
        actions.getArticle(params.id)
    }
    updateArticle() {
        let { actions, params } = this.props
        const self = this
        let article = {
            title: self.state.title,
            category: self.state.category,
            content: self.state.content,
            sequence: parseInt(self.state.sequence, 10),
            update_at: self.state.update_at
        }
        articleActions.updateArticle(article, params.id)
        self.props.history.push('/tutorials')
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
    setupInputValues() {
        let self = this
        const { state } = this.props
        let article = state.articles.article

        if(!self.state.title) {
            console.log(article)
            return {
                title: article.title,
                category: article.category,
                content: article.content,
                sequence: parseInt(article.sequence, 10)
            }
        }
        return {
            title: self.state.title,
            category: self.state.category,
            content: self.state.content,
            sequence: parseInt(self.state.sequence, 10)
        }
    }
    render() {
        let self = this
        const { state } = this.props
        let articles = state.articles
        let article = articles.article

        self.inputValues = self.setupInputValues.bind(self)()


    	return (
    		<div>
    		    <div>
                    <span className="UpdateTutorial-title"><b>Update Tutorial!</b></span>
    		        <div>
    		            <label className="UpdateTutorial-inputLabel">Category</label>
    		            <input className="UpdateTutorial-input" value={self.inputValues.category} onChange={this.handleCategoryChange.bind(this)}></input>
    		        </div>
    		        <div>
    		            <label className="UpdateTutorial-inputLabel">Title</label>
    		            <input className="UpdateTutorial-input" value={self.inputValues.title} onChange={this.handleTitleChange.bind(this)}></input>
    		        </div>
                    <div>
                        <label className="UpdateTutorial-inputLabel">Sequence</label>
                        <input className="UpdateTutorial-input" value={self.inputValues.sequence} onChange={this.handleSequenceChange.bind(this)}></input>
                    </div>
    		        <div>
    		            <label className="UpdateTutorial-inputLabel">Content</label>
                        <textarea className="UpdateTutorial-textInput" value={self.inputValues.content} onChange={this.handleContentChange.bind(this)}></textarea>
                    </div>
                    <div>
                        <button className="UpdateTutorial-submitButton" onClick={this.updateArticle.bind(this)}>submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTutorial)
