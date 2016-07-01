import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as diaryActions from '../../../actions/diaryActionss'

if (process.env.BROWSER) {
    require('./Create.css')
}

class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: null,
            title: null,
            content: null,
            date: (new Date()).getTime(),
            categories: null
        }
    }
    createArticle() {
        let { actions } = this.props,
            self = this,
            params = {
                category: self.state.category,
                title: self.state.title,
                content: self.state.content,
                date: self.state.date,
            }
        firebase.database().ref('diaries/' + self.state.category + "/datas").push(params)
            .then(function(result) {
                actions.addDiary(true)
            })
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
    render() {
    	return (
    		<div>
    		    <div>
    		        <div>
    		            <label className="Create-inputLabel">category</label>
    		            <input className="Create-input" onChange={this.handleCategoryChange.bind(this)}></input>
    		        </div>
    		        <div>
    		            <label className="Create-inputLabel">title</label>
    		            <input className="Create-input" onChange={this.handleTitleChange.bind(this)}></input>
    		        </div>
    		        <div>
    		            <label className="Create-inputLabel">content</label>
                        <textarea className="Create-textInput" onChange={this.handleContentChange.bind(this)}></textarea>
                    </div>
                    <div>
                        <button className="Create-submitButton" onClick={this.createArticle.bind(this)}>submit</button>
                    </div>
    		    </div>
    		</div>
    	)
    }

}

function mapStateToProps(state) {
  return {
    state: state.diaries
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(diaryActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)
