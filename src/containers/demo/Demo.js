import React from 'react'
import ObjectAssign from 'object-assign'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as articleActions from '../../actions/articleActions'
import request from 'superagent';

class Demo extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            resizeWidth: 0
        }
    }
	componentWillMount() {
        const { actions } = this.props
        actions.queryArticles()
        actions.addArticle({hello: 'fuck'})
	}
	componentDidMount() {
	}	
	render() {
        let { state } = this.props
		return (
			<div>
				{state.articles[0]?state.articles[0]._id:null}
                <a href="javascript: void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent('http://dumdumgeniuss.github.io/blog/#/diaries?_k=ofzxcg'))))">生日快樂！</a>
			</div>
		)
	}
}



function mapStateToProps(state) {
  return {
    state: state.articles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)