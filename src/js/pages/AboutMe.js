var React = require('react');
var HideBox = require('../components/box/HideBox.js');

var AboutMe = React.createClass({
	styles: {
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
        	width: "100%",
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
        },
        photoBox: {
        	display: "block",
        	margin: "10px auto",
        	width: "350px",
        },
        photo: {
        	width: "100%",
        	borderRadius: "10px",
        }
	},
	render: function() {
		return (
			<div style={this.styles.mainArea}>
			    <span style={Object.assign(this.styles.titleWordBig, this.styles.centerAlign)}>Profile</span>
			    <HideBox width="60%">
			        <div style={this.styles.separateLine}></div>
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
			    <HideBox width="60%">
			        <div style={this.styles.separateLine}></div>
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
			    <HideBox width="60%">
			        <div style={this.styles.separateLine}></div>
			        <span style={Object.assign(this.styles.contentText, this.styles.centerAlign)}>Java , Ruby , JavaScript</span>
			        <img style={this.styles.inlineLogo} src={"./images/java.png"}></img>
			        <img style={this.styles.inlineLogo} src={"./images/javaScript.png"}></img>
			        <img style={this.styles.inlineLogo} src={"./images/Ruby.png"}></img>
			    </HideBox>
			</div>
		)
	}
});

module.exports = AboutMe;