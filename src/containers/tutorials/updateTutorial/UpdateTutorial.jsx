import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as articleActions from '../../../actions/articleActions'

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
    componentWillReceiveProps(nextProps) {
        const { state } = this.props
        let articles = state.articles
        let article = articles.article
        this.setState({
            title: article.title,
            category: article.category,
            content: article.content,
            sequence: parseInt(article.sequence, 10)
        })
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
    render() {
        let self = this
        const style = require('./UpdateTutorial.scss')
        const { state } = this.props
        let articles = state.articles
        let article = articles.article
        console.log(self.state)


    	return (
    		<div>
    		    <div>
                    <span className={style.title}><b>Update Tutorial!</b></span>
    		        <div>
    		            <label className={style.inputLabel}>Category</label>
    		            <input className={style.input} value={self.state.category} onChange={this.handleCategoryChange.bind(this)}></input>
    		        </div>
    		        <div>
    		            <label className={style.inputLabel}>Title</label>
    		            <input className={style.input} value={self.state.title} onChange={this.handleTitleChange.bind(this)}></input>
    		        </div>
                    <div>
                        <label className={style.inputLabel}>Sequence</label>
                        <input className={style.input} value={self.state.sequence} onChange={this.handleSequenceChange.bind(this)}></input>
                    </div>
    		        <div>
    		            <label className={style.inputLabel}>Content</label>
                        <textarea className={style.textInput} value={self.state.content} onChange={this.handleContentChange.bind(this)}></textarea>
                    </div>
                    <div>
                        <button className={style.submitButton} onClick={this.updateArticle.bind(this)}>submit</button>
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
