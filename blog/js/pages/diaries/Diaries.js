var React = require('react'),
    Radium = require('radium'),
    {Link} = require('react-router'),
    RadiumLink = Radium(Link), //Awesome!!
    Plus = require('react-icons/lib/fa/plus'),
    Facebook = require('react-icons/lib/fa/facebook'),
    SeparateLine = require('../../components/line/SeparateLine'),
    DiaryNavBox = require('../../components/box/DiaryNavBox'),
    DiaryStore = require('../../stores/DiaryStore'),
    DiaryActions = require('../../actions/DiaryActions'),
    styles;



styles = {
    mainArea: {
    	display: "block",
        width: "100%",
        backgroundColor: "#E9EBEE",
        padding: "15px 0px"
    },
    categoriesNav: {
        display: "block",
        width: "60%",
        margin: "0px auto",
        padding: "20px",
        '@media (max-width: 800px)': {
            width: "90%"
        }
    },
    categoryLabel: {
        display: "inline-block",
        backgroundColor: "#ff6b6b",
        backgroundImage: "linear-gradient(#ff6b6b, #bf2828)",
        color: "white",
        padding: "10px",
        margin: "10px 10px",
        borderRadius: "5px",
        cursor: "pointer"
    },
    addArticleButton: {
    	fontSize: "2em"
    },
    linkStyle: {
        cursor: "pointer",
        ':hover': {
            color: "yellow"
        }
    },
    diariesBox: {
        position: "relative",
    },
    addDiaryZone: {
        position: "absolute",
        top: "-70px",
        right: "-10px"
    }
}

var Diaries = React.createClass({
	styles: styles,
	getInitialState: function() {
        return {
            loginButton: false,
            diaries: [],
            diariesInfo: null
        };
	},
	componentWillMount: function() {
        var user = firebase.auth().currentUser;
        console.log("User status", user);
        if(user) {
            this.setState({
                isLogin: true
            });
        } else {
            this.setState({
                isLogin: false
            });
        }

        DiaryStore.on('finishGetDiariesInfo', this.getDiariesInfo);
        DiaryStore.on('finishQueryDiariesByCategory', this.getDiaries);
	},
    componentDidMount: function() {
        DiaryActions.queryDiariesInfo();
    },
    componentWillUnmount: function() {
        DiaryStore.removeListener('finishQueryDiariesByCategory', this.getDiaries);
        DiaryStore.removeListener('finishGetDiariesInfo', this.getDiariesInfo);
    },
    queryDiariesByCategory: function(category) {
        DiaryActions.queryDiariesByCategory(category);
    },
    getDiariesInfo: function() {
        this.setState({
            diariesInfo: DiaryStore.getDiariesInfo()
        });
        this.queryDiariesByCategory(DiaryStore.getDiariesInfo().categories[1]);
    },
    getDiaries: function() {
        this.setState({
            diaries: DiaryStore.getDiaries()
        });
    },
	render: function() {
        var loginButton,
            diaries = this.state.diaries?this.state.diaries:[],
            diariesInfo = this.state.diariesInfo,
            diaryCategories = diariesInfo?diariesInfo.categories:[],
            self = this;

        if(this.state.isLogin) {
            loginButton = <Plus style={this.styles.addArticleButton}></Plus>;
        } else {
        	loginButton = null;
        }

        return (
            <div>
                <div style={this.styles.diariesBox}>
                    <div style={this.styles.categoriesNav}>
                        {diaryCategories.map(function(result) {
                            return (
                                <span key={result} style={self.styles.categoryLabel} onClick={self.queryDiariesByCategory.bind(self, result)}>
                                    {result}
                                </span>
                            );
                        })}
                    </div>
                    {diaries.map(function(result) {
                        return (
                            <DiaryNavBox key={result.id} width="60%" diary={result}>
                            </DiaryNavBox>
                        );
                    })}
                    <div style={this.styles.addDiaryZone}>
                        <RadiumLink style={this.styles.linkStyle} to="/diaries/create">
                            {loginButton}
                        </RadiumLink>
                        <RadiumLink style={this.styles.linkStyle} to="/facebook">
                            <Facebook style={this.styles.addArticleButton}></Facebook>
                        </RadiumLink>
                    </div>
                </div>
            </div>
        );
	}
});

module.exports = Radium(Diaries);