var React = require('react'),
    Radium = require('radium'),
    ObjectAssign = require('object-assign'),
    Calendar = require('react-icons/lib/fa/calendar'),
    {Link} = require('react-router'),
    styles;

styles = {
    mainArea: {
    	position: "relative",
    	margin: "20px auto 40px auto",
    	padding: "20px 20px 40px 20px",
    	borderRadius: "15px",
    	border: "1px solid black",
    	backgroundColor: "white",
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
    	'@media (max-width: 800px)': {
    		width: "90%"
    	}
    },
    title: {
    	display: "block",
    	fontSize: "1.6em",
    	lineHeight: "40px",
    	textAlign: "center",
    	marginTop: "5px"
    },
    diaryType: {
    	position: "absolute",
    	left: "20px",
    	top: "-15px",
    	backgroundColor: "#ff5694",
    	borderRadius: "10px",
    	padding: "8px",
    	fontSize: "1em",
    	color: "white"
    },
    dateBox: {
    	position: "absolute",
    	right: "20px",
    	bottom: "10px",
    	height: "30px"
    },
    calendar: {
    	fontSize: "20px",
    	marginRight: "5px"
    },
    dateText: {
    	display: "inline-block",
    	fontSIze: "1em",
    	lineHeight: "40px",
    	color: "gray",
    },
    contentBox: {
    	padding: "20px 0px",
    	borderTop: "1px solid #DDDDDD",
    	borderBottom: "1px solid #DDDDDD",
    	fontSize: "1.2em",
    	lineHeight: "25px",
    	fontFamily: "Helvetica,arial,freesans,clean,sans-serif",
    	color: "#444444"
    },
    readMoreLink: {
        cursor: "pointer"
    },
    readMoreButton: {
        backgroundColor: "#ff6b6b",
        backgroundImage: "-webkit-linear-gradient(#ff6b6b, #bf2828)",
        backgroundImage: "linear-gradient(#ff6b6b, #bf2828)",
        borderColor: "#4a993e",
        borderRadius: "5px",
        padding: "5px",
        fontSize: "0.8em",
        color: "white"
    }
};

var DiaryNavBox = React.createClass({
    styles: styles,
    incrementZero: function(minutes) {
        if(minutes<10) {
        	return "0" + minutes;
        } else {
        	return minutes;
        }
    },
    render: function() {
    	var diary = this.props.diary,
    	    date = new Date(diary.date);
    	return (
    		<div style={ObjectAssign(this.styles.mainArea, {width: this.props.width})}>
    		    <span style={this.styles.diaryType}>
    		        {diary.category}
    		    </span>
    		    <div style={this.styles.dateBox}>
    		        <Calendar style={this.styles.calendar}/>
    		        <span style={this.styles.dateText}>{date.getFullYear()+"-"}{date.getMonth()+"-"}{date.getDate()+" "}{date.getHours()+":"}{this.incrementZero(date.getMinutes())}</span>
    		    </div>
    		    <span style={this.styles.title}>
    		        <b>{diary.title}</b>
    		    </span>
    		    <div style={this.styles.contentBox}>
    		        {diary.content.substring(0,150)}...
    		        <Link style={this.styles.readMoreLink} to={"/diaries/" + diary.id}>
    		            <span style={this.styles.readMoreButton}>Read More</span>
    		        </Link>
    		    </div>
    		</div>
    	)
    }
});

module.exports = Radium(DiaryNavBox);