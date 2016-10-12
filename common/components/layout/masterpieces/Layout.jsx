import React from 'react'
import PaintBrush from 'react-icons/lib/fa/paint-brush'
import YoutubePlay from 'react-icons/lib/fa/youtube-play'
import ObjectAssign from 'object-assign'
import {Link} from 'react-router'

if (process.env.BROWSER) {
    require('./Layout.css')
}

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    focusIcon(index) {

    }
    render() {
    	return (
    	    <div className="MasterLayout-mainArea">
                <div className="MasterLayout-subMenuItem">
                    <PaintBrush />
                </div>
                {this.props.children}
    	    </div>
    	)
    }
}

export default Layout