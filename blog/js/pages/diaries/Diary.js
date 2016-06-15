var React = require('react'),
    DiaryStore = require('../../stores/DiaryStore'),
    DiaryActions = require('../../actions/DiaryActions'),
    Radium = require('radium'),
    Markdown = require('react-remarkable'),
    Calendar = require('react-icons/lib/fa/calendar'),
    styles;


styles = {
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


var Diaries = React.createClass({
	styles: styles,
    incrementZero: function(minutes) {
        if(minutes<10) {
        	return "0" + minutes;
        } else {
        	return minutes;
        }
    },
	getInitialState: function() {
        return {
            diary: ''
        };
	},
	componentWillMount: function() {
        DiaryStore.on('finishQueryDiary', this.setDiary);
	},
    componentDidMount: function() {
        DiaryActions.queryDiary(this.props.params.id);
    },
    componentWillUnmount: function() {
        DiaryStore.removeListener('finishQueryDiary', this.setDiary);
    },
    setDiary: function() {
        this.setState({
            diary: DiaryStore.getDiary()
        });
    },
	render: function() {
		var diary = this.state.diary,
		    date = new Date(diary.date);
        return (
            <div style={this.styles.mainArea}>
                <span style={this.styles.typeLabel}>
                    {diary.category}
                </span>
                <div style={this.styles.dateBox}>
                    <Calendar style={this.styles.calendar}/>
                    <span  style={this.styles.dateText}>{date.getFullYear()+"-"}{date.getMonth()+"-"}{date.getDate()+" "}{date.getHours()+":"}{this.incrementZero(date.getMinutes())}</span>
                </div>
                <div style={this.styles.diaryContent}>
                    <Markdown source={diary.content}/>
                </div>
            </div>
        );
	}
});

module.exports = Radium(Diaries);