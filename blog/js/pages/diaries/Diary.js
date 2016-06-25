import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as diaryActions from '../../actions/diaryActionss'
import Radium from 'radium'
import Markdown from 'react-remarkable'
import Calendar from 'react-icons/lib/fa/calendar'

class Diary extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            diary: ''
        }
        this.styles = styles
        this.getDiary = this.getDiary.bind(this)
    }
    componentDidMount() {
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
		    typeLabelElem = diary?<span style={this.styles.typeLabel}>{diary.category}</span>:null,
		    completeDate = getCompleteDate(date),
		    dateTextElem = diary?<span style={this.styles.dateText}>{completeDate}</span>:null
        return (
            <div style={this.styles.mainArea}>
                {typeLabelElem}
                <div style={this.styles.dateBox}>
                    <Calendar style={this.styles.calendar}/>
                    {dateTextElem}
                </div>
                <div style={this.styles.diaryContent}>
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

let styles = {
    mainArea: {
        position: "relative",
        display: "block",
        width: "60%",
        margin: "0px auto",
        backgroundColor: "white",
        border: "1px solid black",
        padding: "30px",
        '@media (max-width: 800px)': {
            width: "90%"
        }
    },
    diaryContent: {
        display: "block",
        margin: "0px auto",
        lineHeight: "30px",
        fontFamily: "Helvetica,arial,freesans,clean,sans-serif",
    },
    dateBox: {
        position: "absolute",
        display: "block",
        top: "20px",
        left: "100px",
    },
    typeLabel: {
        position: "absolute",
        display: "inline-block",
        top: "10px",
        left: "-20px",
        padding: "10px",
        backgroundColor: "ff5694",
        color: "white",
        borderRadius: "10px"
    },
    calendar: {
        position: "relative",
        top: "-2px",
        display: "inline-block",
        verticalAlign: "middle",
        fontSize: "20px"
    },
    dateText: {
        display: "inline-block",
        verticalAlign: "middle",
        marginLeft: "10px"
    }
}

Diary = Radium(Diary)

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