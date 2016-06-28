import React from 'react'
import PaintBrush from 'react-icons/lib/fa/paint-brush'
import YoutubePlay from 'react-icons/lib/fa/youtube-play'
import ObjectAssign from 'object-assign'
import {Link} from 'react-router'

import './Layout.css'

class Layout extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
    	return (
    	    <div className="MasterLayout-maindArea">
                <span className="MasterLayout-titleFont">Masterpieces !</span>
                <div className="MasterLayout-contentArea">
    	            <div className="MasterLayout-navbar">
                        <Link className="MasterLayout-masterpieceShowBox" to="/masterpieces">
                            <PaintBrush className="MasterLayout-masterpieceIcon"/> 
                            <span className="MasterLayout-masterpieceIconText">Paintings</span>
                        </Link>
                        <Link className="MasterLayout-masterpieceShowBox" to="/masterpieces/youtubes">
                            <YoutubePlay className="MasterLayout-masterpieceIcon"/> 
                            <span className="MasterLayout-masterpieceIconText">Youtube</span>
                        </Link>
                    </div>
                    <div className="MasterLayout-pageArea">
                        {this.props.children}
                    </div>
                </div>
    	    </div>
    	)
    }
}

export default Layout