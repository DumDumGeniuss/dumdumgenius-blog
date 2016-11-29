import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as articleActions from '../../../actions/articleActions'

import Article from '../../../components/article/Article.jsx'
import SideMenu from '../../../components/menu/sideMenu/SideMenu.jsx'

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
        const self = this
        const { location, params, actions } = self.props
        if(params.id !== nextProps.params.id) {
            self.props.history.push('/tutorials/' + params.category + '/' + nextProps.params.id);
            actions.getArticle(nextProps.params.id)
        }
    }
	componentDidMount() {
	}
    componentDidUpdate() {
    }
	render() {
        let self = this
        const style = require('./Tutorial.scss')

        //Redux
        let { state, location } = self.props
        let articles = state.articles
        let article = articles.article

		return (
			<div className={style.mainArea}>
                <div className={style.nav}>
                    <SideMenu articles={articles.articles} article={article}/>
                </div>
                <div className={style.article}>
				    <Article article={article} />
                </div>
                <div className={style.ad}></div>
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
