import React from 'react'
import {Link} from 'react-router'

import Facebook from 'react-icons/lib/fa/facebook'
import Github from 'react-icons/lib/fa/github'
import Twitter from 'react-icons/lib/fa/twitter'
import Google from 'react-icons/lib/fa/google'

import MoonO from 'react-icons/lib/fa/moon-o'
import SunO from 'react-icons/lib/fa/sun-o'
import Globe from 'react-icons/lib/fa/globe'
import Cloud from 'react-icons/lib/fa/cloud'
import Home from 'react-icons/lib/fa/home'

if (process.env.BROWSER) {
    require('./Welcome.css')
}

class Welcome extends React.Component {
	render() {
		return (
			<div className="Welcome-mainArea">
                <div className='Welcome-universeBackgroundArea'>
                    <Link className='Welcome-homeButton' to="/aboutMe">
                        <Home/>
                    </Link>
                    <div className="Welcome-textArea">
                        <span className="Welcome-centerText">DumDumGenius' Blog</span>
                        <div className="Welcome-logoArea">
                            <Facebook className="Welcome-faIcon"/>
                            <Github className="Welcome-faIcon"/>
                            <Twitter className="Welcome-faIcon"/>
                            <Google className="Welcome-faIcon"/>
                        </div>
                    </div>
                    <Globe className="Welcome-Earth"/>
                    <div className="Welcome-SunAndMoon">
                        <MoonO className="Welcome-MoonO"/>
                        <SunO className="Welcome-SunO"/>
                    </div>
                    <div className="Welcome-dayView">
                    </div>
                    <div className="Welcome-nightView">
                    </div>
                </div>
            </div>
        )
	}
}

export default Welcome