import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as diaryActions from '../../../actions/diaryActionss'
import {Link} from 'react-router'
import Plus from 'react-icons/lib/fa/plus'
import Facebook from 'react-icons/lib/fa/facebook'
import SeparateLine from '../../../components/line/SeparateLine'
import DiaryNavBox from '../../../components/box/diaryNavBox/DiaryNavBox'
import firebase from '../../../services/firebase'

if (process.env.BROWSER) {
    require('./Diaries.css')
}

class Diaries extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            loginButton: false
        }
        this.queryDiariesByCategory = this.queryDiariesByCategory.bind(this)
    }
    componentWillMount() {
        var user = firebase.auth().currentUser
        if(user) {
            this.setState({
                isLogin: true
            })
        } else {
            this.setState({
                isLogin: false
            })
        }
        this.getDiariesInfo()
        this.queryDiaries()
    }
    queryDiaries() {
        const { actions } = this.props
        firebase.database().ref('diaries').once('value')
        .then(function(result) {
            let diaries = toArray(result.val())
            actions.getDiaries(diaries)
        })
    }
    queryDiariesByCategory(category) {
        const { actions } = this.props
            self = this

        firebase.database().ref('diaries').orderByChild('category').equalTo(category).once('value')
        .then(function(result) {
            let diaries = toArray(result.val())
            actions.getDiariesByCategory(diaries)
        })
    }
    getDiariesInfo() {
        const { actions } = this.props,
            self = this

        firebase.database().ref('diariesInfo').once('value')
        .then(function(result) {
            let diariesInfo = result.val()
            actions.getDiariesInfo(diariesInfo)
        })
    }
	render() {
        let { state } = this.props,
            diariesInfo = state.diariesInfo,
            diaryCategories = diariesInfo?diariesInfo.categories:[],
            diaries = state.diaries
        let loginButton,
            self = this

        if(this.state.isLogin) {
            loginButton = <Plus className="Diaries-addArticleButton"></Plus>
        } else {
        	loginButton = null
        }

        return (
            <div className="Diaries-mainArea">
                <div className="Diaries-diariesBox">
                    <div className="Diaries-categoriesNav">
                        {diaryCategories.map(function(result) {
                            return (
                                <span key={result} className="Diaries-categoryLabel" onClick={self.queryDiariesByCategory.bind(self, result)}>
                                    {result}
                                </span>
                            )
                        })}
                    </div>
                    {diaries.map(function(result) {
                        return (
                            <DiaryNavBox key={result.id} diary={result}>
                            </DiaryNavBox>
                        )
                    })}
                    <div className="Diaries-addDiaryZone">
                        <Link className="Diaries-linkStyle" to="/diaries/create">
                            {loginButton}
                        </Link>
                        <Link className="Diaries-linkStyle" to="/facebook">
                            <Facebook className="Diaries-addArticleButton"></Facebook>
                        </Link>
                    </div>
                </div>
            </div>
        )
	}
}

function toArray(map) {
    let array = []
    for(let key in map) {
        let item = map[key]
        item.id = key
        array.push(item)
    }
    return array
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

export default connect(mapStateToProps, mapDispatchToProps)(Diaries)
