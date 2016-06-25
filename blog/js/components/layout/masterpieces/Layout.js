import React from 'react'
import Radium from 'radium'
import PaintBrush from 'react-icons/lib/fa/paint-brush'
import YoutubePlay from 'react-icons/lib/fa/youtube-play'
import ObjectAssign from 'object-assign'
import {Link} from 'react-router'

const RadiumLink = Radium(Link) //Awesome!!

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.styles = styles
    }
    render() {
    	return (
    	    <div style={this.styles.maindArea}>
                <span style={this.styles.titleFont}>Masterpieces !</span>
                <div style={this.styles.contentArea}>
    	            <div style={this.styles.navbar}>
                        <RadiumLink style={this.styles.masterpieceShowBox} to="/masterpieces">
                            <PaintBrush style={ObjectAssign(this.styles.masterpieceIcon)}/> 
                            <span style={this.styles.masterpieceIconText}>Paintings</span>
                        </RadiumLink>
                        <RadiumLink style={this.styles.masterpieceShowBox} to="/masterpieces/youtubes">
                            <YoutubePlay style={this.styles.masterpieceIcon}/> 
                            <span style={this.styles.masterpieceIconText}>Youtube</span>
                        </RadiumLink>
                    </div>
                    <div style={this.styles.pageArea}>
                        {this.props.children}
                    </div>
                </div>
    	    </div>
    	)
    }
}

let styles = {
    maindArea: {
        display: "block",
        padding: "10px 0px",
        width: "100%",
        backgroundColor: "#E9EBEE"
    },
    titleFont: {
        display: "block",
        padding: "20px 0px",
        textAlign: "center",
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: "3em"
    },
    contentArea: {
        width: "90%",
        margin: "0px auto",
        border: "1px solid black"
    },
    navbar: {
        display: "block",
        margin: "0px auto",
        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "white"
    },
    pageArea: {
        padding: "10px 0px",
        margin: "0px auto",
        backgroundColor: "white",
    },
    masterpieceIcon: {
        display: "inline-block",
        color: "#777777",
        fontSize: "50px",
    },
    masterpieceIconText: {
        display: "block",
        padding: "10px 0px 0px 0px",
        color: "black",
        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: "1em"
    },
    masterpieceShowBox: {
        display: "inline-block",
        width: "90px",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
    },
}

export default Radium(Layout)