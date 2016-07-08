import React from 'react'
import SeparateLine from '../../components/line/SeparateLine'
import PaintBrush from 'react-icons/lib/fa/paint-brush'
import YoutubePlay from 'react-icons/lib/fa/youtube-play'

if (process.env.BROWSER) {
    require('./AboutMe.css')
}

let scrollTop = 0

class AboutMe extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            scrollTop: 0,
            backgroundImgClass: 'AbouteMe-backgroundImg',
            backgroundImgTop: 0,
            boxClass: 'AboutMe-box'
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll(event) {
        scrollTop= event.srcElement.body.scrollTop

        this.setState({
            backgroundImgTop: -(scrollTop - 300)/10
        })

        if(scrollTop<300) {
            if(this.state.contentClass !== 'AbouteMe-contentArea'){
                this.setState({
                    backgroundImgClass: 'AbouteMe-backgroundImg',
                    boxClass: 'AboutMe-box'
                })
            }
        } else if(scrollTop>300) {
            if(this.state.contentClass !== 'AbouteMe-contentArea AboutMe-scrollAuto'){
                this.setState({
                    backgroundImgClass: 'AbouteMe-backgroundImgFadeIn',
                    boxClass: 'AboutMe-boxFadeOut'
                })
            }
        }
    }
	render() {
		return (
			<div className="AboutMe-mainArea">
                <div className="AboutMe-backgroundArea">
                    <img className={this.state.backgroundImgClass} style={{top: this.state.backgroundImgTop + 'px'}} src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/taipei101.jpg?alt=media"}>
                    </img>
                </div>
                <div className="AbouteMe-contentArea">
			        <span className="AboutMe-titleWordBig">Profile</span>
			        <div className={this.state.boxClass}>
			            <span className="AboutMe-contentText AboutMe-centerAlign">Messi Yang ( DumDumGenius )</span>
                           <SeparateLine width="50%"/>
			            <div className="AboutMe-photoBox">
			                <img className="AboutMe-photo" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/selfPhoto2.jpg?alt=media"}></img>
			            </div>
			            <span className="AboutMe-contentText AboutMe-centerAlign">Taichung First Senior High School ( 2006 - 2009 )</span>
                           <SeparateLine width="50%"/>
			            <div className="AboutMe-logoBox">
			                <img className="AboutMe-logo" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FTCFSHLogo.png?alt=media"}></img>
			            </div>
			            <span className="AboutMe-contentText AboutMe-centerAlign">National Chiao Tung University ( 2009 - 2013 )</span>
			            <span className="AboutMe-contentText AboutMe-centerAlign">Electronical Engineering</span>
                           <SeparateLine width="50%"/>
			            <div className="AboutMe-logoBox">
			                <img className="AboutMe-logo" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FNCTU_emblem.png?alt=media"}></img>
			            </div>
			        </div>
			        <span className="AboutMe-titleWordBig">Languages</span>
                    <div className={this.state.boxClass}>
			            <span className="AboutMe-contentText AboutMe-centerAlign">Chinese（ 中文 ）</span>
                            <SeparateLine width="50%"/>
                            <span className="AboutMe-contentText AboutMe-centerAlign">Of course, I can speak it !</span>
                            <br/>
			            <span className="AboutMe-contentText AboutMe-centerAlign">Fluent English ( TOEIC 835 )</span>
                            <SeparateLine width="50%"/>
			            <div className="AboutMe-photoBox">
			                <img className="AboutMe-photo" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/TOEIC.png?alt=media"}></img>
			            </div>
			            <span className="AboutMe-contentText AboutMe-centerAlign">Japanese Communication ( JLPT N2 )</span>
                            <SeparateLine width="50%"/>
			            <div className="AboutMe-photoBox">
			                <img className="AboutMe-photo" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/JLPT.png?alt=media"}></img>
			            </div>
			        </div>
			        <span className="AboutMe-titleWordBig">Skills</span>
                    <div className={this.state.boxClass}>
			            <span className="AboutMe-contentText AboutMe-centerAlign">Java , Ruby , JavaScript</span>
                        <SeparateLine width="50%"/>
                        <div>
			                <img className="AboutMe-inlineLogo AboutMe-middleAlign" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FJava.png?alt=media"}></img>
                            <p className="AboutMe-inlineParagraph AboutMe-middleAlign">
                                <span className="AboutMe-textInParagraph">Java:</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Develop web application with Spring , Hibernate</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Familiar with Java Design Pattern and server side Java design</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Data Structure in Java</span>
                            </p>
                        </div>
                        <div>
			                <img className="AboutMe-inlineLogo AboutMe-middleAlign" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FjavaScript.png?alt=media"}></img>
                            <p className="AboutMe-inlineParagraph AboutMe-middleAlign">
                                <span className="AboutMe-textInParagraph">JavaScript:</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">React ( on this blog ) , Angular</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Beautiful coding style on JS</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">It's my favorite language now!</span>
                            </p>
                        </div>
                        <div>
			                <img className="AboutMe-inlineLogo AboutMe-middleAlign" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FRuby.png?alt=media"}></img>
                            <p className="AboutMe-inlineParagraph AboutMe-middleAlign">
                                <span className="AboutMe-textInParagraph">Ruby:</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Well knowledge on Ruby On Rails</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Solved 50+ problems with Ruby on Leetcode</span>
                            </p>
                        </div>
                        <div>
                            <img className="AboutMe-inlineLogo AboutMe-middleAlign" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FCss3.png?alt=media"}></img>
                            <p className="AboutMe-inlineParagraph AboutMe-middleAlign">
                                <span className="AboutMe-textInParagraph">CSS3:</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Freakingly awesome UI designer</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Artist out of engineers</span>
                            </p>
                        </div>
			        </div>
                    <span className="AboutMe-titleWordBig">Contact Me</span>
                    <div className="AboutMe-separateLine"></div>
                    <div className={this.state.boxClass}>
                        <span className="AboutMe-contentText AboutMe-centerAlign">dumdumgenius@gmail.com</span>
                        <br/>
                    </div>
                </div>
			</div>
		)
	}
}

export default AboutMe
