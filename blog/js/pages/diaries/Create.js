var React = require('react'),
    DiaryStore = require('../../stores/DiaryStore'),
    DiaryActions = require('../../actions/DiaryActions'),
    styles;

var styles = {
    inputLabel: {
    	display: "block",
    	fontSize: "2em",
    	textAlign: "center"
    },
    input: {
    	display: "block",
    	width: "300px",
    	height: "30px",
    	margin: "5px auto",
    	border: "1px solid black"
    },
    textInput: {
    	display: "block",
    	width: "80%",
    	height: "350px",
    	margin: "5px auto",
    	border: "1px solid black",
    	overflow: "scroll"
    },
    submitButton: {
    	display: "block",
    	width: "100px",
    	height: "40px",
    	margin: "5px auto",
    	border: "1px solid black"
    }
};

var Create = React.createClass({
    styles: styles,
    getInitialState: function() {
        return {
        	category: null,
        	title: null,
        	content: null,
        	date: (new Date()).getTime(),
           	isArticleExist: true
        }
    },
    componentWillMount: function() {
    	var self = this;
		DiaryStore.on('finishGetDiariesInfo', this.checkArticleExist);
		DiaryStore.on('finishCheckArticle', this.setIsArticleExist);
    },
    componentDidMount: function() {
		DiaryActions.queryDiariesInfo();
    },
    componentWillUnmount: function() {
        DiaryStore.removeListener('finishGetDiaries', this.checkArticleExist);
        DiaryStore.removeListener('finishCheckArticle', this.setIsArticleExist);
    },
    setIsArticleExist: function() {
	    this.setState({
            isArticleExist: DiaryStore.getIsArticleExitst()
	    });
    },
    checkArticleExist: function() {
        DiaryActions.checkArticleExist();
    },
    createArticle: function() {
        var self = this,
            id = DiaryStore.getDiariesInfo().amount,
            params = {
            	id: id,
                category: self.state.category,
                title: self.state.title,
                content: self.state.content,
                date: self.state.date,
            };

        DiaryActions.addDiary(params);

    },
    handleCategoryChange: function(event) {
    	this.setState({
            category: event.target.value
    	});
    },
    handleTitleChange: function(event) {
    	this.setState({
            title: event.target.value
    	});
    },
    handleContentChange: function(event) {
    	this.setState({
            content: event.target.value
    	});
    },
    render: function() {
    	return (
    		<div>
    		    <div>
    		        <div>
    		            <label style={this.styles.inputLabel}>category</label>
    		            <input style={this.styles.input} onChange={this.handleCategoryChange}></input>
    		        </div>
    		        <div>
    		            <label style={this.styles.inputLabel}>title</label>
    		            <input style={this.styles.input} onChange={this.handleTitleChange}></input>
    		        </div>
    		        <div>
    		            <label style={this.styles.inputLabel}>content</label>
                        <textarea style={this.styles.textInput} onChange={this.handleContentChange}></textarea>
                    </div>
                    <div>
                        <button style={this.styles.submitButton} onClick={this.createArticle} disabled={this.state.isArticleExist}>submit</button>
                    </div>
    		    </div>
    		</div>
    	);
    }

});

module.exports = Create;
