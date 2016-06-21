import React from 'react';
import Assign from 'object-assign';
import Radium from 'radium';
import AngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';
import AngleDoubleRight from 'react-icons/lib/fa/angle-double-right';
import SeparateLine from '../line/SeparateLine';

class TinyYoutubeBox extends React.Component{
	constructor(props) {
        super(props);
        this.styles = styles;
        this.state = {
            currentShowIndex: 0,
            youtubeTitle: 'Pick the one you like !',
            playYoutubeUrl: 'https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/youtubes%2FdefaultImage.png?alt=media',
            youtubePlayWidth: 640,
            youtubePlayHeight: 480
        };
        this.handleResize = this.handleResize.bind(this);
    }
	componentDidMount() {
	}
    componentWillMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize(event) {
        var windowWidth = event.srcElement.window.innerWidth;
        if(windowWidth < 800 && this.state.youtubePlayWidth == 640) {
            this.setState({
                youtubePlayWidth: 300,
                youtubePlayHeight: 225
            });
        } else if(windowWidth > 800 && this.state.youtubePlayWidth == 300) {
            this.setState({
                youtubePlayWidth: 640,
                youtubePlayHeight: 480
            });
        }
    }
	setShowYoutube(key, youtubes) {
        this.setState({
        	playYoutubeUrl: youtubes[key].url,
            youtubeTitle: youtubes[key].title
        });
	}
	render() {
		const self = this;
		let youtubeSize = this.props.youtubeSize;
		let boxSize = this.props.boxSize;
		let youtubes = this.props.youtubes;
        let youtubePhotoListSize = this.props.youtubePhotoListSize;
		let photoListScreenHeigth = youtubeSize.height;
		return (
			<div style={Assign(this.styles.photoBox, {width: boxSize.width, height: boxSize.height})}>
                <SeparateLine width="100%"/>
			    <div style={Assign(this.styles.photoListScreen, {width: youtubePhotoListSize.width})}>
                    <AngleDoubleLeft style={this.styles.navbarArrowLeft}/>
			        {youtubes.map(function(result) {
                        return <img onClick={self.setShowYoutube.bind(self, result.id, youtubes)} key={result.id} src={result.screenshot} style={Assign(self.styles.photo, {width: youtubeSize.width, height: youtubeSize.height})}></img>
			        })}
                    <AngleDoubleRight style={this.styles.navbarArrowRight}/>
			    </div>
                <SeparateLine width="100%"/>
			    <span style={this.styles.photoNav}>
			        {this.state.youtubeTitle}
			    </span>
			    <div style={this.styles.displayVideoScreen}>
                    <iframe src={this.state.playYoutubeUrl} width={this.state.youtubePlayWidth} height={this.state.youtubePlayHeight}> </iframe>
			    </div>
			</div>
		);
	}
};

let styles = {
    photoBox: {
        margin: "0px auto",
    },
    photo: {
        display: "inline-block",
        cursor: "pointer"
    },
    photoListScreen: {
        display: "block",
        margin: "0px auto",
        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        minHeight: "100px",
        '@media (max-width: 800px)': {
            width: "80%",
        },
    },
    photoNav: {
        display: "block",
        height: "60px",
        lineHeight: "60px",
        fontSize: "1.5em",
        color: "black",
        textAlign: "center"
    },
    navbarArrowLeft: {
        display: "inline-block",
        position: "absolute",
        marginTop: "70px",
        left: "10px",
        fontSize: "40px",
        color: "#CCCCCC"
    },
    navbarArrowRight: {
        display: "inline-block",
        position: "absolute",
        marginTop: "70px",
        right: "10px",
        fontSize: "40px",
        color: "#CCCCCC",
    },
    displayVideoScreen: {
        display: "block",
        margin: "0px auto",
        width: "640",
        backgroundColor: "#CCCCCC",
        overflowX: "hidden",
        overflowY: "hidden",
        '@media (max-width: 800px)': {
            width: "300px",
        },
    },
};

module.exports = Radium(TinyYoutubeBox);
