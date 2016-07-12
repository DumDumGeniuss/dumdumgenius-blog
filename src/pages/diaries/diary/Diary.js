import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as diaryActions from '../../../actions/diaryActionss'
import Markdown from 'react-remarkable'
import Calendar from 'react-icons/lib/fa/calendar'
import firebase from '../../../services/firebase'

let currentHref = null;

if (process.env.BROWSER) {
    require('./Diary.css')
    currentHref = window.location.href
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
    componentDidMount() {
        if (process.env.BROWSER) {
            window.fbAsyncInit = function() {
                FB.init({
                    appId      : '256265008062534',
                    cookie     : true,  // enable cookies to allow the server to access the session
                    xfbml      : true,  // parse social plugins on this page
                    version    : 'v2.5' // use version 2.1
                });
            }.bind(this);
    
            // Load the SDK asynchronously
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }
    }
    componentDidUpdate() {
        FB.XFBML.parse()
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
        let reduxState = this.props.state,
            categoryLabelColors = this.state.categoryLabelColors,
            diary = reduxState.diary,
		    date = diary?new Date(diary.date):null,
		    typeLabelElem = diary?<span className="Diary-typeLabel" style={{backgroundColor: categoryLabelColors[diary.category]}}>{diary.category}</span>:null,
		    completeDate = getCompleteDate(date),
		    dateTextElem = diary?<span className="Diary-dateText">{completeDate}</span>:null,
            fbCommentsElem = currentHref?<div className="fb-comments" data-href={currentHref} data-width="100%" data-numposts="5"></div>:null

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
                {fbCommentsElem}
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