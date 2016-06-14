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

    },
    addDiaryZone: {
        position: "absolute",
        top: "100%",
        right: "5%"
    }
}

var Diaries = React.createClass({
	styles: styles,
	getInitialState: function() {
        return {
            loginButton: false,
            diaries: []
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

        DiaryStore.on('finishQueryDiaries', this.getDiaries);
	},
    componentDidMount: function() {
        DiaryActions.queryDiaries();
    },
    componentWillUnmount: function() {
        DiaryStore.removeListener('finishQueryDiaries', this.getDiaries);
    },
    getDiaries: function() {
        this.setState({
            diaries: DiaryStore.getDiaries()
        });
        console.log(DiaryStore.getDiaries());
    },
	render: function() {
        var loginButton,
            diaries = this.state.diaries;

        if(this.state.isLogin) {
            loginButton = <Plus style={this.styles.addArticleButton}></Plus>;
        } else {
        	loginButton = null;
        }

        return (
            <div>
                <div style={this.styles.diariesBox}>
                    {diaries.map(function(result) {
                        return (
                            <DiaryNavBox key={result.id} width="60%" diary={result}>
                            </DiaryNavBox>
                        );
                    })}
                </div>
                <div style={this.styles.addDiaryZone}>
                    <RadiumLink style={this.styles.linkStyle} to="/diaries/create">
                        {loginButton}
                    </RadiumLink>
                    <RadiumLink style={this.styles.linkStyle} to="/facebook">
                        <Facebook style={this.styles.addArticleButton}></Facebook>
                    </RadiumLink>
                </div>
            </div>
        );
	}
});

module.exports = Radium(Diaries);