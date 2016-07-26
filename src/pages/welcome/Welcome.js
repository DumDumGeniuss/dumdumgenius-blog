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
import Star from 'react-icons/lib/fa/star'

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
                    <span className="Welcome-centerText">DumDumGenius' Blog</span>
                    <div className="Welcome-logoArea">
                        <Facebook className="Welcome-faIcon"/>
                        <Github className="Welcome-faIcon"/>
                        <Twitter className="Welcome-faIcon"/>
                        <Google className="Welcome-faIcon"/>
                    </div>
                    <Globe className="Welcome-Earth"/>
                    <div className="Welcome-SunAndMoon">
                        <MoonO className="Welcome-MoonO"/>
                        <SunO className="Welcome-SunO"/>
                    </div>
                    <div className="Welcome-night">
                    	<Star className="Welcome-star Welcome-star-1"/>
                    	<Star className="Welcome-star Welcome-star-2"/>
                    	<Star className="Welcome-star Welcome-star-3"/>
                    	<Star className="Welcome-star Welcome-star-4"/>
                    	<Star className="Welcome-star Welcome-star-5"/>
                    </div>
                </div>
            </div>
        )
	}
}

export default Welcome