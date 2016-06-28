import React from 'react'
import ObjectAssign from 'object-assign'
import Calendar from 'react-icons/lib/fa/calendar'
import {Link} from 'react-router'

import './DiaryNavBox.css'

class DiaryNavBox extends React.Component {
    constructor(props) {
        super(props)
    }
    incrementZero(minutes) {
        return minutes<10?("0" + minutes):minutes
    }
    render() {
    	let diary = this.props.diary,
    	   date = new Date(diary.date)
    	return (
    		<div className='DiaryNavBox-mainArea'>
    		    <span className='DiaryNavBox-diaryType'>
    		        {diary.category}
    		    </span>
    		    <div className='DiaryNavBox-dateBox'>
    		        <Calendar className='DiaryNavBox-calendar'/>
    		        <span className='DiaryNavBox-dateText'>{date.getFullYear()+"-"}{(date.getMonth()+1)+"-"}{date.getDate()+" "}{date.getHours()+":"}{this.incrementZero(date.getMinutes())}</span>
    		    </div>
    		    <span className='DiaryNavBox-title'>
    		        <b>{diary.title}</b>
    		    </span>
    		    <div className='DiaryNavBox-contentBox'>
    		        {diary.content.substring(0,100)}...
    		        <Link className='DiaryNavBox-readMoreLink' to={"/diaries/"+diary.id+"?category="+diary.category}>
    		            <span className='DiaryNavBox-readMoreButton'>Read More</span>
    		        </Link>
    		    </div>
    		</div>
    	)
    }
}

export default DiaryNavBox
