import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';
import Plus from 'react-icons/lib/fa/plus';
import Facebook from 'react-icons/lib/fa/facebook';
import SeparateLine from '../../components/line/SeparateLine';
import DiaryNavBox from '../../components/box/DiaryNavBox';
import DiaryStore from '../../stores/DiaryStore';
import DiaryActions from '../../actions/DiaryActions';

let RadiumLink = Radium(Link); //Awesome!!

class Diaries extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            loginButton: false,
            diaries: [],
            diariesInfo: null
        }
        this.styles = styles;
        this.getDiariesInfo = this.getDiariesInfo.bind(this);
        this.getDiaries = this.getDiaries.bind(this);
    }
	componentWillMount() {
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
	}
    componentDidMount() {
        DiaryActions.queryDiariesInfo();
    }
    componentWillUnmount() {
        DiaryStore.removeListener('finishQueryDiariesByCategory', this.getDiaries);
        DiaryStore.removeListener('finishGetDiariesInfo', this.getDiariesInfo);
    }
    queryDiariesByCategory(category) {
        DiaryActions.queryDiariesByCategory(category);
    }
    getDiariesInfo() {
        this.setState({
            diariesInfo: DiaryStore.getDiariesInfo()
        });
        this.queryDiariesByCategory(DiaryStore.getDiariesInfo().categories[1]);
    }
    getDiaries() {
        this.setState({
            diaries: DiaryStore.getDiaries()
        });
    }
	render() {
        let loginButton,
            diaries = this.state.diaries?this.state.diaries:[],
            diariesInfo = this.state.diariesInfo,
            diaryCategories = diariesInfo?diariesInfo.categories:[],
            self = this;

        if(this.state.isLogin) {
            loginButton = <Plus style={this.styles.addArticleButton}></Plus>;
        } else {
        	loginButton = null;
        };

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
};

let styles = {
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
            width: "100%"
        }
    },
    categoryLabel: {
        display: "inline-block",
        backgroundColor: "#ff6b6b",
        backgroundImage: "linear-gradient(#ff6b6b, #bf2828)",
        color: "white",
        padding: "10px",
        margin: "5px 5px",
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
};

module.exports = Radium(Diaries);