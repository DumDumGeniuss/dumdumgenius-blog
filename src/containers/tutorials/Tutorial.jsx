import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as articleActions from '../../actions/articleActions'


class Article extends React.Component {
	constructor(props) {
        super(props)
        this.state = {      
        }
    }
	componentWillMount() {
        const { actions, location, params } = this.props
        actions.getArticle(params.id)
	}
	componentDidMount() {
	}
    componentDidUpdate() {
    }
	render() {
        let self = this

        //Redux
        let { state } = self.props
        let articles = state.articles
        let article = articles.article
        console.log(articles)

		return (
			<div>
				{article.category}
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

export default connect(mapStateToProps, mapDispatchToProps)(Article)
