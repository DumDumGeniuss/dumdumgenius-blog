import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as articleActions from '../../../actions/articleActions'

import Article from '../../../components/article/Article.jsx'
import SideMenu from '../../../components/menu/sideMenu/SideMenu.jsx'

if (process.env.BROWSER) {
    require('./Tutorial.css')
}

class Tutorial extends React.Component {
	constructor(props) {
        super(props)
        this.state = {      
        }
    }
	componentWillMount() {
        const { actions, location, params } = this.props
        actions.getArticle(params.id)
        actions.queryArticles({
            category: params.category
        })
	}
    componentWillReceiveProps(nextProps) {
        const { location, params, actions } = this.props
        if(location !== nextProps.location) {
            actions.getArticle(nextProps.params.id)
        }
    }
	componentDidMount() {
	}
    componentDidUpdate() {
    }
	render() {
        let self = this

        //Redux
        let { state, location } = self.props
        let articles = state.articles
        let article = articles.article

		return (
			<div className="Tutorial-mainArea">
                <div className="Tutorial-nav">
                    <SideMenu articles={articles.articles} article={article}/>
                </div>
                <div className="Tutorial-article">
				    <Article article={article} />
                </div>
                <div className="Tutorial-ad"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tutorial)
