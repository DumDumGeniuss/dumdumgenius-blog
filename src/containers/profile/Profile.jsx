import React from 'react'

import Pause from 'react-icons/lib/fa/pause'
import Play from 'react-icons/lib/fa/play'

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            starWarScrollMarginTop: 0,
            starWarViewRotate: 0,
            movieStatus: true
        }
        this.killScroll = this.killScroll.bind(this)
        this.startScroll = this.startScroll.bind(this)
    }
    componentDidMount() {
        const self = this

        self.startWarsAudio =document.getElementById('star-wars-audio')

        self.starWarScrollHeight = document.getElementById('star-war-scroll').getBoundingClientRect().height
        self.starWarViewHeight = document.getElementById('star-war-view').getBoundingClientRect().height

        self.initialStarWarsScroll()

        self.startScroll()
    }
    componentWillUnmount() {
        const self = this
        self.killScroll()
        // self.autoPalyStarWarsAudio()
    }
    initialStarWarsScroll() {
        const self = this
        self.setState({
            starWarScrollMarginTop: self.starWarViewHeight*0.70,
            starWarViewRotate: 30
        })
    }
    startStarWarsAudio() {
        const self = this
        self.startWarsAudio.play()
    }
    pausePauseWarsAudio() {
        const self = this
        self.startWarsAudio.pause()
    }
    startScroll() {
        const self = this
        self.scrollInterval = setInterval(function() {
            self.setState({
                starWarScrollMarginTop: self.state.starWarScrollMarginTop - 1,
                movieStatus: true
            })
            if(self.state.starWarScrollMarginTop < -self.starWarScrollHeight-50 ) {
                self.killScroll()
                self.initialStarWarsScroll()
            }
        }, 30)
        self.startStarWarsAudio()
    }
    killScroll() {
        const self = this
        window.clearInterval(this.scrollInterval)
        self.setState({
            movieStatus: false
        })
        self.pausePauseWarsAudio()
    }
	render() {
        const self = this
        const style = require('./Profile.scss')
		return (
			<div className={style.mainArea}>
                <img className={style.backgroundImg} src="assets/images/universe.jpg"/>
                <audio id="star-wars-audio" className={style.starWarsAudio} autoPlay loop>
                  <source src="assets/audios/starwars.mp3" type="audio/mpeg"/>
                </audio>
                <div className={style.functionIcon + " " + style.pauseIcon} style={ {display: self.state.movieStatus?'initial':'none'} } onClick={self.killScroll}>
                    <Pause />
                </div>
                <div className={style.functionIcon + " " + style.pauseIcon} style={ {display: !self.state.movieStatus?'initial':'none'} } onClick={self.startScroll}>
                    <Play />
                </div>
                <div id="star-war-view" style={ {transform: 'rotateX(' + self.state.starWarViewRotate + 'deg)'} } className={style.starWarView}>
                    <div id="star-war-scroll" className={style.starWarScroll} style={{marginTop: self.state.starWarScrollMarginTop + 'px'}}>
                        <h1 className={style.h1}><u>Hello</u></h1>
                        <span className={style.span}>Welcome to my blog,</span>
                        <span className={style.span}>Glad to see you, Without any further</span>
                        <span className={style.span}>Let's introduce myself.</span>

                        <h1 className={style.h1}><u>Profile</u></h1>
                        <span className={style.span}>DumDumGenius</span>
                        <span className={style.span}>A.K.A</span>
                        <span className={style.span}>Messi Yang</span>
                        <span className={style.span}>Born in Taiwan, 1991</span>
                        <span className={style.span}>Full-Stack web develop</span>

                        <h1 className={style.h1}><u>Motto</u></h1>
                        <img className={style.contentPicture} src="assets/images/motto.jpg"/>

                        <h1 className={style.h1}><u>Education</u></h1>
                        <span className={style.span}>Taichung First Senior High School</span>
                        <span className={style.span}>National Chiao Tung University</span>

                        <h1 className={style.h1}><u>Language</u></h1>
                        <span className={style.span}>1. Chiese</span>
                        <span className={style.span}>2. Japanese</span>
                        <span className={style.span}>3. English</span>

                        <h3 className={style.h3}><u>Frontend Web Technique</u></h3>
                        <span className={style.span}>1. ReactJS plus Redux</span>
                        <span className={style.span}>2. AngularJS</span>
                        <span className={style.span}>3. Automation with Gulp, Webpack</span>
                        <span className={style.span}>4. Design Awesome view with CSS3</span>
                        <span className={style.span}>5. 3rd-party Library, like FB, Google </span>

                        <h3 className={style.h3}><u>Backend Web Technique</u></h3>
                        <span className={style.span}>1. Java & SpringMVC</span>
                        <span className={style.span}>2. Ruby on Rails</span>
                        <span className={style.span}>3. Node & Express</span>
                        <span className={style.span}>4. RestfulAPI design</span>
                        <span className={style.span}>5. Application Auto-Deployment</span>
                        <span className={style.span}>6. Server Side Rendering</span>
                        <span className={style.span}>7. Test Driven Development</span>
                        <span className={style.span}>8. Postgresql, MySql Database Design</span>
                        <span className={style.span}>9. Build Amazone EC2 & Nginx Server</span>

                        <h3 className={style.h3}><u>Contact Me</u></h3>
                        <span className={style.span}>dumdumgenius@gmail.com</span>
                        <span className={style.span}>https://www.facebook.com/dumdumgenius</span>
                        <span className={style.span}>https://github.com/DumDumGeniuss</span>
                    </div>
                </div>
            </div>
        )
	}
}

export default Profile
