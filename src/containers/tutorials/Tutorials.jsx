import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as articleActions from '../../actions/articleActions'

import RollingMenu from '../../components/menu/rollingMenu/RollingMenu.jsx'

class Tutorials extends React.Component {
	constructor(props) {
        super(props)
        this.state = {       
        }
    }
	componentWillMount() {
        const { actions, location } = this.props
        actions.queryArticleCategories()
	}
	componentDidMount() {
	}
    componentDidUpdate() {
    }
    createMenuObjects(categories) {
        var menus = []
        for(var i = 0; i < categories.length; i++) {
            menus.push({
                name: categories[i],
                link: '/tutorials/' + categories[i]
            })
        }
        return menus
    }
	render() {
        let self = this

        //Redux
        let { state } = self.props
        let articles = state.articles
        let menus = self.createMenuObjects(articles.categories || [])

        let component

		return (
			<div>
				<RollingMenu menus={menus} title={"Tutorials"}></RollingMenu>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tutorials)
