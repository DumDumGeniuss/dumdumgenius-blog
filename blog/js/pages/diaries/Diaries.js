import React from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as diaryActions from '../../actions/diaryActionss'
import {Link} from 'react-router'
import Plus from 'react-icons/lib/fa/plus'
import Facebook from 'react-icons/lib/fa/facebook'
import SeparateLine from '../../components/line/SeparateLine'
import DiaryNavBox from '../../components/box/DiaryNavBox'

let RadiumLink = Radium(Link) //Awesome!!

class Diaries extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            loginButton: false
        }
        this.styles = styles
        this.queryDiariesByCategory = this.queryDiariesByCategory.bind(this)
    }
	componentWillMount() {
        var user = firebase.auth().currentUser
        console.log("User status", user)
        if(user) {
            this.setState({
                isLogin: true
            })
        } else {
            this.setState({
                isLogin: false
            })
        }
	}
    componentDidMount() {
        this.getDiariesInfo()
    }
    queryDiariesByCategory(category) {
        const { actions } = this.props
            self = this

        firebase.database().ref('diaries').child(category+'/datas').orderByChild('date').once('value')
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
            self.queryDiariesByCategory(diariesInfo.categories[1])
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
            loginButton = <Plus style={this.styles.addArticleButton}></Plus>
        } else {
        	loginButton = null
        }

        return (
            <div>
                <div style={this.styles.diariesBox}>
                    <div style={this.styles.categoriesNav}>
                        {diaryCategories.map(function(result) {
                            return (
                                <span key={result} style={self.styles.categoryLabel} onClick={self.queryDiariesByCategory.bind(self, result)}>
                                    {result}
                                </span>
                            )
                        })}
                    </div>
                    {diaries.map(function(result) {
                        return (
                            <DiaryNavBox key={result.id} width="60%" diary={result}>
                            </DiaryNavBox>
                        )
                    })}
                    <div style={this.styles.addDiaryZone}>
                        <RadiumLink style={this.styles.linkStyle} to="/diaries/create">
                            {loginButton}
                        </RadiumLink>
                        <RadiumLink style={this.styles.linkStyle} to="/facebook">
                            <Facebook style={this.styles.addArticleButton}></Facebook>
                        </RadiumLink>
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

let styles = {
    mainArea: {
        display: "block",
        width: "100%",
        backgroundColor: "#E9EBEE",
        padding: "15px 0px"
    },
    categoriesNav: {
        display: "block",
        width: "60%",
        margin: "0px auto",
        padding: "20px",
        '@media (max-width: 800px)': {
            width: "100%"
        }
    },
    categoryLabel: {
        display: "inline-block",
        backgroundColor: "#ff6b6b",
        backgroundImage: "linear-gradient(#ff6b6b, #bf2828)",
        color: "white",
        padding: "10px",
        margin: "5px 5px",
        borderRadius: "5px",
        cursor: "pointer"
    },
    addArticleButton: {
        fontSize: "2em"
    },
    linkStyle: {
        cursor: "pointer",
        ':hover': {
            color: "yellow"
        }
    },
    diariesBox: {
        position: "relative",
    },
    addDiaryZone: {
        position: "absolute",
        top: "-70px",
        right: "-10px"
    }
}

Diaries = Radium(Diaries)

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
