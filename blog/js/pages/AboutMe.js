var React = require('react');
var Radium = require('radium');
var HideBox = require('../components/box/HideBox.js');
var PaintBrush = require('react-icons/lib/fa/paint-brush');
var YoutubePlay = require('react-icons/lib/fa/youtube-play');
var SeparateLine = require('../components/line/SeparateLine');

var styles = {
    mainArea: {
    	display: "block",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.78)"
    },
    titleWordBig: {
    	display: "block",
    	color: "white",
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
    	fontSize: "3em",
    	padding: "15px 0px 15px 0px"
    },
    centerAlign: {
    	textAlign: "center"
    },
    contentText: {
    	display: "block",
    	padding: "10px 0px 0px 0px",
    	color: "white",
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
    	fontSize: "1.2em"
    },
    logoBox: {
    	display: "block",
    	margin: "10px auto",
    	width: "140px",
    	height: "140px",
    	padding: "10px",
    	backgroundColor: "rgba(255, 255, 255, 0.28)",
        borderRadius: "140px"
    },
    logo: {
    	display: "inline-block",
    	width: "120px",
    	height: "120px",
        padding: "10px"
    },
    inlineLogo: {
    	width: "110px",
    	height: "110px",
        '@media (max-width: 800px)': {
            display: "block",
            margin: "0px auto"
        },
    },
    photoBox: {
    	display: "block",
    	margin: "10px auto",
    	width: "250px",
    	'@media (max-width: 650px)': {
    	    width: "70%",
        },
    },
    photo: {
    	width: "100%",
    	borderRadius: "10px",
    },
    inlineParagraph: {
        display: "inline-block",
        width: "60%",
        backgroundColor: "rgba(128, 128, 128, 0.52)",
        padding: "10px",
        borderRadius: "10px",
        '@media (max-width: 800px)': {
            display: "block",
            width: "90%",
            margin: "0px auto"
        },

    },
    middleAlign: {
        verticalAlign: "middle"
    },
    textInParagraph: {
        display: "inline-block",
        color: "white",
        fontSize: "1em",
        lineHeight: "20px",
        '@media (max-width: 800px)': {
            padding: "10px 0px"
        },
    },
}

var AboutMe = React.createClass({
	styles: styles,
	getInitialState: function() {
		return {
            resizeWidth: 0,
		};
	},
	componentDidMount: function() {
    },
    
    // componentWillUnmount: function() {

    // },
 //    componentWillUnmount: function() {
 //        window.removeEventListener('resize', this.handleResize);
 //    },
 //    handleResize: function(event) {
 //        this.setState({
 //            resizeWidth: event.srcElement.window.innerWidth
 //        });
 //    },
	render: function() {
		return (
			<div style={this.styles.mainArea}>
			    <span style={Object.assign(this.styles.titleWordBig, this.styles.centerAlign)}>Profile</span>
			    <SeparateLine />
			    <HideBox width="100%">
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Messi Yang ( DumDumGenius )</span>
			        // <div style={this.styles.photoBox}>
			            <img style={this.styles.photo} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/selfPhoto.jpg?alt=media"}></img>
			        </div>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Taichung First Senior High School ( 2006 - 2009 )</span>
			        <div style={this.styles.logoBox}>
			            <img style={this.styles.logo} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FTCFSHLogo.png?alt=media"}></img>
			        </div>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>National Chiao Tung University ( 2009 - 2013 )</span>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Electronical Engineering</span>
			        <div style={this.styles.logoBox}>
			            <img style={this.styles.logo} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FNCTU_emblem.png?alt=media"}></img>
			        </div>
			    </HideBox>
			    <span style={Object.assign(this.styles.titleWordBig, this.styles.centerAlign)}>Languages</span>
                <SeparateLine />
			    <HideBox width="100%">
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Chinese（ 中文 ）</span>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Fluent English ( TOEIC 835 )</span>
			        <div style={this.styles.photoBox}>
			            <img style={this.styles.photo} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/TOEIC.png?alt=media"}></img>
			        </div>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Japanese Communication ( JLPT N2 )</span>
			        <div style={this.styles.photoBox}>
			            <img style={this.styles.photo} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/JLPT.png?alt=media"}></img>
			        </div>
			    </HideBox>
			    <span style={Object.assign(this.styles.titleWordBig, this.styles.centerAlign)}>Skills</span>
                <SeparateLine />
			    <HideBox width="60%">
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Java , Ruby , JavaScript</span>
                    <div>
			            <img style={Object.assign(this.styles.inlineLogo, this.styles.middleAlign)} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FJava.png?alt=media"}></img>
                        <p style={Object.assign(this.styles.inlineParagraph, this.styles.middleAlign)}>
                            <span style={this.styles.textInParagraph}>Java:</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>Develop web application with Spring , Hibernate</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>Familiar with Java Design Pattern and server side Java design</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>Data Structure in Java</span>
                        </p>
                    </div>
                    <div>
			            <img style={Object.assign(this.styles.inlineLogo, this.styles.middleAlign)} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FjavaScript.png?alt=media"}></img>
                        <p style={Object.assign(this.styles.inlineParagraph, this.styles.middleAlign)}>
                            <span style={this.styles.textInParagraph}>JavaScript:</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>React ( on this blog ) , Angular</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>Beautiful coding style on JS</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>It's my favorite language now!</span>
                        </p>
                    </div>
                    <div>
			            <img style={Object.assign(this.styles.inlineLogo, this.styles.middleAlign)} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FRuby.png?alt=media"}></img>
                        <p style={Object.assign(this.styles.inlineParagraph, this.styles.middleAlign)}>
                            <span style={this.styles.textInParagraph}>Ruby:</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>Well knowledge on Ruby On Rails</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>Solved 50+ problems with Ruby on Leetcode</span>
                        </p>
                    </div>
                    <div>
                        <img style={Object.assign(this.styles.inlineLogo, this.styles.middleAlign)} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FCss3.png?alt=media"}></img>
                        <p style={Object.assign(this.styles.inlineParagraph, this.styles.middleAlign)}>
                            <span style={this.styles.textInParagraph}>CSS3:</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>Freakingly awesome UI designer</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>Artist out of engineers</span>
                        </p>
                    </div>
			    </HideBox>
                <span style={Object.assign(this.styles.titleWordBig, this.styles.centerAlign)}>Contact Me</span>
                <SeparateLine />
                <div style={this.styles.separateLine}></div>
                <HideBox width="100%">
                    <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>dumdumgenius@gmail.com</span>
                    <br/>
                </HideBox>
			</div>
		)
	}
});

module.exports = Radium(AboutMe);
