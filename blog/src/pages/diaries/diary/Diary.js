import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as diaryActions from '../../../actions/diaryActionss'
import Markdown from 'react-remarkable'
import Calendar from 'react-icons/lib/fa/calendar'

import './Diary.css'

class Diary extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            diary: ''
        }
        this.getDiary = this.getDiary.bind(this)
    }
    componentWillMount() {
        let { query } = this.props.location,
            { params } = this.props

        this.getDiary(query.category, params.id)
    }
    getDiary(category, id) {
        const { actions } = this.props

        firebase.database().ref('diaries/' + category + '/datas/' + id).once('value')
            .then(function(result) {
                let diary = result.val()
                actions.getDiary(diary)
            })
    }
	render() {
        let { state } = this.props,
            diary = state.diary,
		    date = diary?new Date(diary.date):null,
		    typeLabelElem = diary?<span className="Diary-typeLabel">{diary.category}</span>:null,
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