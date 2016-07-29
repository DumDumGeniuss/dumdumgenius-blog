import React from 'react'

if (process.env.BROWSER) {
    require('./Profile.css')
}

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    componentDidMount() {
        this.starWarViewHeight = document.getElementById('star-war-view').getBoundingClientRect().height;
    }
    componentWillUnmount() {
    }
	render() {
		return (
			<div className="Profile-mainArea">
                <div id="star-war-view" className="Profile-starWarView">
                    <div className="Profile-starWarScroll">
                        <h1 className="Profile-h1">Hello</h1>
                        <span className="Profile-span">Welcome to my blog,</span>
                        <span className="Profile-span">Glad to see you, Without any further</span>
                        <span className="Profile-span">Let's introduce myself.</span>

                        <h1 className="Profile-h1">Profile</h1>
                        <span className="Profile-span">DumDumGenius</span>
                        <span className="Profile-span">A.K.A</span>
                        <span className="Profile-span">Messi Yang</span>
                        <span className="Profile-span">Born in Taiwan, 1991</span>
                        <span className="Profile-span">Full-Stack web develop</span> 

                        <h1 className="Profile-h1">Education</h1>
                        <span className="Profile-span">Taichung First Senior High School</span>
                        <span className="Profile-span">National Chiao Tung University</span>

                        <h1 className="Profile-h1">Language</h1>
                        <span className="Profile-span">1. Chiese</span>
                        <span className="Profile-span">2. Japanese</span>
                        <span className="Profile-span">3. English</span>

                        <h3 className="Profile-h3">Frontend Web Technique</h3>
                        <span className="Profile-span">1. ReactJS plus Redux</span>
                        <span className="Profile-span">2. AngularJS</span>
                        <span className="Profile-span">3. Automation with Gulp, Webpack</span>
                        <span className="Profile-span">4. Design Awesome view with CSS3</span>
                        <span className="Profile-span">5. 3rd-party Library, like FB, Google </span>

                        <h3 className="Profile-h3">Backend Web Technique</h3>
                        <span className="Profile-span">1. Java & SpringMVC</span>
                        <span className="Profile-span">2. Ruby on Rails</span>
                        <span className="Profile-span">3. Node & Express</span>
                        <span className="Profile-span">4. RestfulAPI design</span>
                        <span className="Profile-span">5. Application Auto-Deployment</span>
                        <span className="Profile-span">6. Server Side Rendering</span>
                        <span className="Profile-span">7. Test Driven Development</span>
                        <span className="Profile-span">8. Postgresql, MySql Database Design</span>
                        <span className="Profile-span">9. Build Amazone EC2 & Nginx Server</span>

                        <h3 className="Profile-h3">Contact Me</h3>
                        <span className="Profile-span">dumdumgenius@gmail.com</span>
                        <span className="Profile-span">https://www.facebook.com/dumdumgenius</span>
                        <span className="Profile-span">https://github.com/DumDumGeniuss</span>
                    </div>
                </div>
            </div>
        )
	}
}

export default Profile