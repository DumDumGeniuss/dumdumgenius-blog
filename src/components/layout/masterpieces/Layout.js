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
            iconsColor: [
                "MasterLayout-masterpieceShowBox MasterLayout-onBackground",
                "MasterLayout-masterpieceShowBox MasterLayout-offBackground"
            ],
            currentOn: 0
        }
    }
    focusIcon(index) {
        this.state.iconsColor[index] = "MasterLayout-masterpieceShowBox MasterLayout-onBackground"
        this.state.iconsColor[this.state.currentOn] = "MasterLayout-masterpieceShowBox MasterLayout-offBackground"
        this.state.currentOn = index
    }
    render() {
        const iconsColor = this.state.iconsColor
    	return (
    	    <div className="MasterLayout-maindArea">
                <span className="MasterLayout-titleFont">Masterpieces !</span>
                <div className="MasterLayout-contentArea">
    	            <div className="MasterLayout-navbar">
                        <Link className={iconsColor[0]} onClick={this.focusIcon.bind(this, 0)} to="/masterpieces">
                            <PaintBrush className="MasterLayout-masterpieceIcon"/> 
                        </Link>
                        <Link className={iconsColor[1]} onClick={this.focusIcon.bind(this, 1)} to="/masterpieces/youtubes">
                            <YoutubePlay className="MasterLayout-masterpieceIcon"/> 
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