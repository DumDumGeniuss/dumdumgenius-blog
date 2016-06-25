import React from 'react'
import Radium from 'radium'
import HideBox from '../components/box/HideBox.js'
import PaintBrush from 'react-icons/lib/fa/paint-brush'
import YoutubePlay from 'react-icons/lib/fa/youtube-play'
import SeparateLine from '../components/line/SeparateLine'


class AboutMe extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            resizeWidth: 0
        }
        this.styles = styles
    }
	componentDidMount() {
    }
	render() {
		return (
			<div style={this.styles.mainArea}>
			    <span style={Object.assign(this.styles.titleWordBig, this.styles.centerAlign)}>Profile</span>
			    <HideBox width="75%">
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Messi Yang ( DumDumGenius )</span>
                    <SeparateLine width="50%"/>
			        <div style={this.styles.photoBox}>
			            <img style={this.styles.photo} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/selfPhoto2.jpg?alt=media"}></img>
			        </div>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Taichung First Senior High School ( 2006 - 2009 )</span>
                    <SeparateLine width="50%"/>
			        <div style={this.styles.logoBox}>
			            <img style={this.styles.logo} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FTCFSHLogo.png?alt=media"}></img>
			        </div>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>National Chiao Tung University ( 2009 - 2013 )</span>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Electronical Engineering</span>
                    <SeparateLine width="50%"/>
			        <div style={this.styles.logoBox}>
			            <img style={this.styles.logo} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FNCTU_emblem.png?alt=media"}></img>
			        </div>
			    </HideBox>
			    <span style={Object.assign(this.styles.titleWordBig, this.styles.centerAlign)}>Languages</span>
			    <HideBox width="75%">
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Chinese（ 中文 ）</span>
                    <SeparateLine width="50%"/>
                    <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Of course, I can speak it !</span>
                    <br/>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Fluent English ( TOEIC 835 )</span>
                    <SeparateLine width="50%"/>
			        <div style={this.styles.photoBox}>
			            <img style={this.styles.photo} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/TOEIC.png?alt=media"}></img>
			        </div>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Japanese Communication ( JLPT N2 )</span>
                    <SeparateLine width="50%"/>
			        <div style={this.styles.photoBox}>
			            <img style={this.styles.photo} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/JLPT.png?alt=media"}></img>
			        </div>
			    </HideBox>
			    <span style={Object.assign(this.styles.titleWordBig, this.styles.centerAlign)}>Skills</span>
			    <HideBox width="75%">
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Java , Ruby , JavaScript</span>
                    <SeparateLine width="50%"/>
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
                <div style={this.styles.separateLine}></div>
                <HideBox width="75%">
                    <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>dumdumgenius@gmail.com</span>
                    <br/>
                </HideBox>
			</div>
		)
	}
}

let styles = {
    mainArea: {
        display: "block",
        width: "100%",
        backgroundColor: "#E9EBEE",
        padding: "15px 0px"
    },
    titleWordBig: {
        display: "block",
        color: "black",
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
        color: "black",
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
        backgroundColor: "#EFEFEF",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
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
        color: "black",
        fontSize: "1em",
        lineHeight: "20px",
        '@media (max-width: 800px)': {
            padding: "10px 0px"
        },
    },
}

export default Radium(AboutMe)
