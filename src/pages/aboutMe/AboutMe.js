import React from 'react'
import SeparateLine from '../../components/line/SeparateLine'
import PaintBrush from 'react-icons/lib/fa/paint-brush'
import YoutubePlay from 'react-icons/lib/fa/youtube-play'

if (process.env.BROWSER) {
    require('./AboutMe.css')
}

let scrollTop = 0
const scrollThreshold = 400

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
            backgroundImgTop: -(scrollTop - scrollThreshold)/10
        })

        if(scrollTop<scrollThreshold) {
            if(this.state.backgroundImgClass !== 'AbouteMe-backgroundImgFadeOut' && this.state.backgroundImgClass !== 'AbouteMe-backgroundImg'){
                this.setState({
                    backgroundImgClass: 'AbouteMe-backgroundImgFadeOut',
                    boxClass: 'AboutMe-box'
                })
            }
        } else if(scrollTop>scrollThreshold) {
            if(this.state.backgroundImgClass !== 'AbouteMe-backgroundImgFadeIn'){
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
			            <h1 className="AboutMe-contentText AboutMe-centerAlign">Messi Yang ( DumDumGenius )</h1>
                           <SeparateLine width="50%"/>
			            <div className="AboutMe-photoBox">
			                <img className="AboutMe-photo" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/selfPhoto2.jpg?alt=media"}></img>
			            </div>
			            <h1 className="AboutMe-contentText AboutMe-centerAlign">Taichung First Senior High School ( 2006 - 2009 )</h1>
                           <SeparateLine width="50%"/>
			            <div className="AboutMe-logoBox">
			                <img className="AboutMe-logo" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FTCFSHLogo.png?alt=media"}></img>
			            </div>
			            <h1 className="AboutMe-contentText AboutMe-centerAlign">National Chiao Tung University ( 2009 - 2013 )</h1>
			            <h3 className="AboutMe-contentText AboutMe-centerAlign">Electronical Engineering</h3>
                           <SeparateLine width="50%"/>
			            <div className="AboutMe-logoBox">
			                <img className="AboutMe-logo" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FNCTU_emblem.png?alt=media"}></img>
			            </div>
			        </div>
			        <span className="AboutMe-titleWordBig">Languages</span>
                    <div className={this.state.boxClass}>
			            <h1 className="AboutMe-contentText AboutMe-centerAlign">Chinese（ 中文 ）</h1>
                            <SeparateLine width="50%"/>
                            <span className="AboutMe-contentText AboutMe-centerAlign">Of course, I can speak it !</span>
                            <br/>
			            <h1 className="AboutMe-contentText AboutMe-centerAlign">Fluent English ( TOEIC 835 )</h1>
                            <SeparateLine width="50%"/>
			            <div className="AboutMe-photoBox">
			                <img className="AboutMe-photo" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/TOEIC.png?alt=media"}></img>
			            </div>
			            <h1 className="AboutMe-contentText AboutMe-centerAlign">Japanese Communication ( JLPT N2 )</h1>
                            <SeparateLine width="50%"/>
			            <div className="AboutMe-photoBox">
			                <img className="AboutMe-photo" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/JLPT.png?alt=media"}></img>
			            </div>
			        </div>
			        <span className="AboutMe-titleWordBig">Skills</span>
                    <div className={this.state.boxClass}>
			            <h1 className="AboutMe-contentText AboutMe-centerAlign">Java , NodeJs,  Ruby , JavaScript</h1>
                        <SeparateLine width="50%"/>
                        <div>
			                <img className="AboutMe-inlineLogo AboutMe-middleAlign" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FJava.png?alt=media"}></img>
                            <p className="AboutMe-inlineParagraph AboutMe-middleAlign">
                                <span className="AboutMe-contentText">Java:</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Develop web application with Spring , Hibernate</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Actually I started my career with Java, and had about 2-years experience</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">I think Java is powerful when it's applied with Design Pattern</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">and large System, because it's more strict that makes it stable and reliable</span>
                            </p>
                        </div>
                        <div>
			                <img className="AboutMe-inlineLogo AboutMe-middleAlign" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FjavaScript.png?alt=media"}></img>
                            <p className="AboutMe-inlineParagraph AboutMe-middleAlign">
                                <span className="AboutMe-contentText">JavaScript:</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">I have experiences on web-develop-tool like gulp, webpack, </span>
                                <br/>
                                <span className="AboutMe-textInParagraph">and of course writing ES6 by babel(It's used on this website)</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">JavaScript is an amazing functional language,</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">which is simple and extremely flexible!</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">So it's my favorite choice now</span>
                            </p>
                        </div>
                        <div>
                            <img className="AboutMe-inlineLogo AboutMe-middleAlign" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2Fnodejs.png?alt=media"}></img>
                            <p className="AboutMe-inlineParagraph AboutMe-middleAlign">
                                <span className="AboutMe-contentText">NodeJS:</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Can use both ES5, ES6 in coding NodeJS</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Popular tools like npm, express</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Continue...</span>
                            </p>
                        </div>
                        <div>
			                <img className="AboutMe-inlineLogo AboutMe-middleAlign" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FRuby.png?alt=media"}></img>
                            <p className="AboutMe-inlineParagraph AboutMe-middleAlign">
                                <span className="AboutMe-contentText">Ruby:</span>
                                <br/>
                                <span className="AboutMe-textInParagraph"><b><i>Ruby On Rails</i></b> is fantastic web-framwork,</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">and that's why I fell in love with Ruby in a period of time</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">I Solved 50+ problems with Ruby on Leetcode, </span>
                                <br/>
                                <span className="AboutMe-textInParagraph">in that I found the power of Ruby, and how elegant it is </span>
                            </p>
                        </div>
                        <div>
                            <img className="AboutMe-inlineLogo AboutMe-middleAlign" src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/logos%2FCss3.png?alt=media"}></img>
                            <p className="AboutMe-inlineParagraph AboutMe-middleAlign">
                                <span className="AboutMe-contentText">CSS3:</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">I think it's necessary for frontend developer to be proficient in CSS,</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">Cause' you must be able to transform everything you see into HTML plus CSS</span>
                                <br/>
                                <span className="AboutMe-textInParagraph">I'm still on my way to reveal the power of CSS3~</span>
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
