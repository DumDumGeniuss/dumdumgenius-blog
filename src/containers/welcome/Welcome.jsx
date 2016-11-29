import React from 'react'

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


class Welcome extends React.Component {
	render() {
        const style = require('./Welcome.scss');
		return (
			<div className={style.mainArea}>
                <div className={style.universeBackgroundArea}>
                    <span className={style.centerText}>DumDumGenius' Blog</span>
                    <div className={style.logoArea}>
                        <a href="https://www.facebook.com/dumdumgeniusblog/">
                            <Facebook className={style.faIcon}/>
                        </a>
                        <a href="https://github.com/DumDumGeniuss">
                            <Github className={style.faIcon}/>
                        </a>
                        <a href="https://www.facebook.com/dumdumgeniusblog/">
                            <Twitter className={style.faIcon}/>
                        </a>
                        <a href="https://www.facebook.com/dumdumgeniusblog/">
                            <Google className={style.faIcon}/>
                        </a>
                    </div>
                    <Globe className={style.Earth}/>
                    <div className={style.SunAndMoon}>
                        <MoonO className={style.MoonO}/>
                        <SunO className={style.SunO}/>
                    </div>
                    <div className={style.night}>
                    	<Star className={style.star + " " + style['star-1']}/>
                    	<Star className={style.star + " " + style['star-2']}/>
                    	<Star className={style.star + " " + style['star-3']}/>
                    	<Star className={style.star + " " + style['star-4']}/>
                    	<Star className={style.star + " " + style['star-5']}/>
                    </div>
                    <div className={style.day}>
                    	<Cloud className={style.cloud + " " + style['cloud-1']}/>
                    	<Cloud className={style.cloud + " " + style['cloud-2']}/>
                    	<Cloud className={style.cloud + " " + style['cloud-3']}/>
                    	<Cloud className={style.cloud + " " + style['cloud-4']}/>
                    	<Cloud className={style.cloud + " " + style['cloud-5']}/>
                    </div>
                </div>
            </div>
        )
	}
}

export default Welcome
