import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as diaryActions from '../../../actions/diaryActionss'
import Markdown from 'react-remarkable'
import Calendar from 'react-icons/lib/fa/calendar'
import firebase from '../../../services/firebase'

if (process.env.BROWSER) {
    require('./Diary.css')
}

class Diary extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            diary: '',
            categoryLabelColors: {
                journal: "#0aa700",
                movie: "#ff5c2b",
                life: "#FFB6CC",
                military: "#ff0000",
                technique: "#00b8ff",
                technique: "#ffc0dd"
            }
        }
        this.getDiary = this.getDiary.bind(this)
    }
    componentWillMount() {
        let { query } = this.props.location,
            { params } = this.props

        this.getDiary(params.id)
    }
    getDiary(id) {
        const { actions } = this.props

        firebase.database().ref('diaries/' + id).once('value')
            .then(function(result) {
                let diary = result.val()
                actions.getDiary(diary)
            })
    }
	render() {
        let { state } = this.props,
            categoryLabelColors = this.state.categoryLabelColors,
            diary = state.diary,
		    date = diary?new Date(diary.date):null,
		    typeLabelElem = diary?<span className="Diary-typeLabel" style={{backgroundColor: categoryLabelColors[diary.category]}}>{diary.category}</span>:null,
		    completeDate = getCompleteDate(date),
		    dateTextElem = diary?<span className="Diary-dateText">{completeDate}</span>:null
        return (
            <div className="Diary-mainArea">
                {typeLabelElem}
                <div className="Diary-dateBox">
                    <Calendar className="Diary-calendar"/>
                    {dateTextElem}
                </div>
                <div className="Diary-diaryContent">
                    <Markdown>
                        {diary?diary.content:null}
                    </Markdown>
                </div>
            </div>
        )
	}
}

function incrementZero(minutes) {
    return minutes < 10?("0" + minutes):minutes
}

function getCompleteDate(date) {
    return date?(date.getFullYear() + "-" + incrementZero(date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + incrementZero(date.getMinutes())):null
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

export default connect(mapStateToProps, mapDispatchToProps)(Diary)