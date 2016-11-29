import React from 'react'
import PaintBrush from 'react-icons/lib/fa/paint-brush'
import YoutubePlay from 'react-icons/lib/fa/youtube-play'
import ObjectAssign from 'object-assign'
import {Link} from 'react-router'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    focusIcon(index) {

    }
    render() {
        const style = require('./Layout.scss')
    	return (
    	    <div className={style.mainArea}>
                <div className={style.subMenuItem}>
                    <PaintBrush />
                </div>
                {this.props.children}
    	    </div>
    	)
    }
}

export default Layout
