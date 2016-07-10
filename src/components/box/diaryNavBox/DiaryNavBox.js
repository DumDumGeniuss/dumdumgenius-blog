import React from 'react'
import ObjectAssign from 'object-assign'
import Calendar from 'react-icons/lib/fa/calendar'
import {Link} from 'react-router'

if (process.env.BROWSER) {
    require('./DiaryNavBox.css')
}

class DiaryNavBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryLabelColors: {
                journal: "#0aa700",
                movie: "#ff5c2b",
                life: "#FFB6CC",
                military: "#ff0000",
                technique: "#00b8ff"
            }
        }
    }
    render() {
    	let diary = this.props.diary,
    	   date = new Date(diary.date),
           categoryLabelColors = this.state.categoryLabelColors
    	return (
    		<div className='DiaryNavBox-mainArea'>
    		    <span className='DiaryNavBox-diaryType' style={{backgroundColor: categoryLabelColors[diary.category]}}>
    		        {diary.category}
    		    </span>
    		    <div className='DiaryNavBox-dateBox'>
    		        <Calendar className='DiaryNavBox-calendar'/>
    		        <span className='DiaryNavBox-dateText'>{getCompleteDate(date)}</span>
    		    </div>
    		    <span className='DiaryNavBox-title'>
    		        <b>{diary.title}</b>
    		    </span>
    		    <div className='DiaryNavBox-contentBox'>
    		        {diary.content.substring(0,100)}...
    		        <Link className='DiaryNavBox-readMoreLink' to={"/diaries/"+diary.id}>
    		            <span className='DiaryNavBox-readMoreButton'>Read More</span>
    		        </Link>
    		    </div>
    		</div>
    	)
    }
}

function getCompleteDate(date) {
    return date.getFullYear() 
            + "-" + (date.getMonth()+1) 
            + "-" + date.getDate() 
            + " " + date.getHours() 
            + ":" + incrementZero(date.getMinutes())
}

function incrementZero(minutes) {
    return minutes<10?("0" + minutes):minutes
}

export default DiaryNavBox
