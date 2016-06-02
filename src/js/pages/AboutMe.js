var React = require('react');
var Radium = require('radium');
var HideBox = require('../components/box/HideBox.js');

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
    separateLine: {
    	display: "block",
    	width: "60%",
    	margin: "0px auto",
    	border: "1px solid white"
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
    	width: "110px",
    	height: "110px",
    	padding: "15px"
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
    	width: "350px",
    	'@media (max-width: 650px)': {
    	    width: "80%",
        },
    },
    photo: {
    	width: "100%",
    	borderRadius: "10px",
    },
    inlineParagraph: {
        display: "inline-block"
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
    }
}

var AboutMe = React.createClass({
	styles: styles,
	getInitialState: function() {
		return {
            resizeWidth: 0
		};
	},
	// componentDidMount: function() {
 //        window.addEventListener('resize', this.handleResize);
 //    },
    
 //    componentWillUnmount: function() {
 //        window.addEventListener('resize', this.handleResize);
 //    },
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
			    <div style={this.styles.separateLine}></div>
			    <HideBox width="100%">
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Messi Yang ( DumDumGenius )</span>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>1991/04/15 ( 25y )</span>
			        <div style={this.styles.photoBox}>
			            <img style={this.styles.photo} src={"./images/selfPhoto.png"}></img>
			        </div>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Taichung First Senior High School ( 2006 - 2009 )</span>
			        <div style={this.styles.logoBox}>
			            <img style={this.styles.logo} src={"./images/TCFSHLogo.png"}></img>
			        </div>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>National Chiao Tung University ( 2009 - 2013 )</span>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Electronical Engineering</span>
			        <div style={this.styles.logoBox}>
			            <img style={this.styles.logo} src={"./images/NCTU_emblem.png"}></img>
			        </div>
			    </HideBox>
			    <span style={Object.assign(this.styles.titleWordBig, this.styles.centerAlign)}>Languages</span>
			    <div style={this.styles.separateLine}></div>
			    <HideBox width="100%">
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Chinese（ 中文 ）</span>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Fluent English ( TOEIC 835 )</span>
			        <div style={this.styles.photoBox}>
			            <img style={this.styles.photo} src={"./images/TOEIC.png"}></img>
			        </div>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Japanese Communication ( JLPT N2 )</span>
			        <div style={this.styles.photoBox}>
			            <img style={this.styles.photo} src={"./images/JLPT.png"}></img>
			        </div>
			    </HideBox>
			    <span style={Object.assign(this.styles.titleWordBig, this.styles.centerAlign)}>Skills</span>
			    <div style={this.styles.separateLine}></div>
			    <HideBox width="60%">
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Java , Ruby , JavaScript</span>
                    <div>
			            <img style={Object.assign(this.styles.inlineLogo, this.styles.middleAlign)} src={"./images/Java.png"}></img>
                        <p style={Object.assign(this.styles.inlineParagraph, this.styles.middleAlign)}>
                            <span style={this.styles.textInParagraph}>Java, 2-years experience</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>Develop web application with Spring , Hibernate</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>Familiar with Java Design Patter , server side application</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>Data Structure in Java</span>
                        </p>
                    </div>
                    <div>
			            <img style={Object.assign(this.styles.inlineLogo, this.styles.middleAlign)} src={"./images/javaScript.png"}></img>
                        <p style={Object.assign(this.styles.inlineParagraph, this.styles.middleAlign)}>
                            <span style={this.styles.textInParagraph}>Java, 2-years experience</span>
                            <br/>
                            <span style={this.styles.textInParagraph}>Develop web application with Spring , Hibernate</span>
                        </p>
                    </div>
                    <div>
			            <img style={Object.assign(this.styles.inlineLogo, this.styles.middleAlign)} src={"./images/Ruby.png"}></img>
                        <p style={Object.assign(this.styles.inlineParagraph, this.styles.middleAlign)}>
                            <span style={this.styles.textInParagraph}>hello</span>
                        </p>
                    </div>
			    </HideBox>
			</div>
		)
	}
});

module.exports = Radium(AboutMe);
