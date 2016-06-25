import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as diaryActions from '../../actions/diaryActionss'

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
        this.styles = styles
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

        //DiaryActions.addDiary(params, self.state.category)

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
    		            <label style={this.styles.inputLabel}>category</label>
    		            <input style={this.styles.input} onChange={this.handleCategoryChange.bind(this)}></input>
    		        </div>
    		        <div>
    		            <label style={this.styles.inputLabel}>title</label>
    		            <input style={this.styles.input} onChange={this.handleTitleChange.bind(this)}></input>
    		        </div>
    		        <div>
    		            <label style={this.styles.inputLabel}>content</label>
                        <textarea style={this.styles.textInput} onChange={this.handleContentChange.bind(this)}></textarea>
                    </div>
                    <div>
                        <button style={this.styles.submitButton} onClick={this.createArticle.bind(this)}>submit</button>
                    </div>
    		    </div>
    		</div>
    	)
    }

}

let styles = {
    inputLabel: {
        display: "block",
        fontSize: "2em",
        textAlign: "center"
    },
    input: {
        display: "block",
        width: "300px",
        height: "30px",
        margin: "5px auto",
        border: "1px solid black"
    },
    textInput: {
        display: "block",
        width: "80%",
        height: "350px",
        margin: "5px auto",
        border: "1px solid black",
        overflow: "scroll"
    },
    submitButton: {
        display: "block",
        width: "100px",
        height: "40px",
        margin: "5px auto",
        border: "1px solid black"
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
