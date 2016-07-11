import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as diaryActions from '../../../actions/diaryActionss'
import {Link} from 'react-router'
import firebase from '../../../services/firebase'

import SeparateLine from '../../../components/line/SeparateLine'
import DiaryNavBox from '../../../components/box/diaryNavBox/DiaryNavBox'

import Plus from 'react-icons/lib/fa/plus'
import Facebook from 'react-icons/lib/fa/facebook'
import FlighterJet from 'react-icons/lib/fa/fighter-jet'
import VideoCamera from 'react-icons/lib/fa/video-camera'
import Bicycle from 'react-icons/lib/fa/bicycle'
import Coffee from 'react-icons/lib/fa/coffee'
import Cogs from 'react-icons/lib/fa/cogs'
import Book from 'react-icons/lib/fa/book'

if (process.env.BROWSER) {
    require('./Diaries.css')
}

class Diaries extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            loginButton: false,
            categoryPick: null,
            categoryLabelClasses: {
                all: "Diaries-categoryLabel",
                journal: "Diaries-categoryLabel",
                movie: "Diaries-categoryLabel",
                life: "Diaries-categoryLabel",
                military: "Diaries-categoryLabel",
                technique: "Diaries-categoryLabel"
            }
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
        const { actions } = this.props,
            categoryLabelClasses = this.state.categoryLabelClasses

        categoryLabelClasses[this.state.categoryPick] = "Diaries-categoryLabel"
        categoryLabelClasses['all'] = "Diaries-categoryLabel Diaries-categoryLabelOn"

        this.setState({
            categoryPick: 'all',
            categoryLabelClasses: categoryLabelClasses
        })

        firebase.database().ref('diaries').once('value')
        .then(function(result) {
            let diaries = toArray(result.val())
            actions.getDiaries(diaries)
        })
    }
    queryDiariesByCategory(category) {
        const { actions } = this.props,
            categoryLabelClasses = this.state.categoryLabelClasses

        categoryLabelClasses[this.state.categoryPick] = "Diaries-categoryLabel"
        categoryLabelClasses[category] = "Diaries-categoryLabel Diaries-categoryLabelOn"

        this.setState({
            categoryPick: category,
            categoryLabelClasses: categoryLabelClasses
        })

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
            diaries = state.diaries?state.diaries:[],
            categoryLabelClasses = this.state.categoryLabelClasses,
            loginButton,
            self = this,
            categoryPick = this.state.categoryPick,
            backgroundImageElem

        switch(categoryPick) {
            case 'all':
                backgroundImageElem = <Book className="Diaries-book"/>
                break
            case 'technique':
                backgroundImageElem = <Cogs className="Diaries-cogs"/>
                break
            case 'life':
                backgroundImageElem = <Coffee className="Diaries-coffee"/>
                break
            case 'journal':
                backgroundImageElem = <Bicycle className="Diaries-bicycle"/>
                break
            case 'military':
                backgroundImageElem = <FlighterJet className="Diaries-flighterJet"/>
                break
            case 'movie':
                backgroundImageElem = <VideoCamera className="Diaries-movie"/>
                break
        }


        if(this.state.isLogin) {
            loginButton = <Plus className="Diaries-addArticleButton"></Plus>
        } else {
        	loginButton = null
        }

        return (
            <div className="Diaries-mainArea">
                <div className="Diaries-backgroundArea">
                    {backgroundImageElem}
                </div>
                <div className="Diaries-diariesBox">
                    <div className="Diaries-categoriesNav">
                        <span className={categoryLabelClasses['all']} onClick={self.queryDiaries.bind(self)}>
                            All
                        </span>
                        {diaryCategories.map(function(result) {
                            return (
                                <span key={result} className={categoryLabelClasses[result]} onClick={self.queryDiariesByCategory.bind(self, result)}>
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
                </div>
                <div className="Diaries-addDiaryZone">
                    <Link className="Diaries-linkStyle" to="/diaries/create">
                        {loginButton}
                    </Link>
                    <Link className="Diaries-linkStyle" to="/facebook">
                        <Facebook className="Diaries-addArticleButton"></Facebook>
                    </Link>
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
