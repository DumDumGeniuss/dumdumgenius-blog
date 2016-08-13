import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as articleActions from '../../actions/articleActions'

import RollingMenu from '../../components/menu/rollingMenu/RollingMenu.jsx'

class ArticlesByCateg extends React.Component {
	constructor(props) {
        super(props)
        this.state = {      
        }
    }
	componentWillMount() {
        const { actions, location, params } = this.props
        let query = {
            category: params.category
        }
        actions.queryArticles(query)
	}
	componentDidMount() {
	}
    componentDidUpdate() {
    }
    createMenuObjects(articles, category) {
        var menus = []
        for(var i = 0; i < articles.length; i++) {
            menus.push({
                name: articles[i].title+'sss',
                link: '/tutorials/' + category + '/' + articles[i]._id
            })
        }
        return menus
    }
	render() {
        let self = this
        const { params } = this.props

        //Redux
        let { state } = self.props
        let articles = state.articles
        let menus = self.createMenuObjects(articles.articles || [], params.category)

        let component

		return (
			<div>
				<RollingMenu menus={menus} title={params.category}></RollingMenu>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesByCateg)
