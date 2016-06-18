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
    	var category = this.props.location.query.category;
        DiaryActions.queryDiary(this.props.params.id, category);
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
		    date = new Date(diary.date),
		    typeLabelElem = diary?<span style={this.styles.typeLabel}>{diary.category}</span>:null,
		    completeDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + this.incrementZero(date.getMinutes()),
		    dateTextElem = diary?<span style={this.styles.dateText}>{completeDate}</span>:null;
        return (
            <div style={this.styles.mainArea}>
                {typeLabelElem}
                <div style={this.styles.dateBox}>
                    <Calendar style={this.styles.calendar}/>
                    {dateTextElem}
                </div>
                <div style={this.styles.diaryContent}>
                    <Markdown>
                        {diary.content}
                    </Markdown>
                </div>
            </div>
        );
	}
});

module.exports = Radium(Diaries);