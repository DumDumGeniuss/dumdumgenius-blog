import React from 'react'
import Assign from 'object-assign'
import Radium from 'radium'
import AngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'
import AngleDoubleRight from 'react-icons/lib/fa/angle-double-right'
import SeparateLine from '../line/SeparateLine'

class TinyPhotoBox extends React.Component {
	constructor(props) {
        super(props)
        this.styles = styles
        this.state = {
            currentShowIndex: 0,
            showPainting: null,
            paintingTitle: 'Pick the one you like !',
            defaultImageUrl: 'https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/paintings%2FdefaultImage.png?alt=media'
        }
    }
	componentDidMount() {
	}
    componentWillMount() {
    }
	setShowPainting(key, paintings) {
        this.setState({
        	showPainting: paintings[key],
            paintingTitle: paintings[key].title
        })
	}
	render() {
		const self = this
		let photoSize = this.props.photoSize
		let boxSize = this.props.boxSize
		let paintings = this.props.paintings
        let photoListSize = this.props.photoListSize
		return (
			<div style={Assign(this.styles.photoBox, {width: boxSize.width, height: boxSize.height})}>
                <SeparateLine width="100%"/>
			    <div style={Assign(this.styles.photoListScreen, {width: photoListSize.width})}>
                    <AngleDoubleLeft style={this.styles.navbarArrowLeft}/>
			        {paintings.map(function(result) {
                        return <img onClick={self.setShowPainting.bind(self, result.id, paintings)} key={result.id} src={result.src} style={Assign(self.styles.photo, {width: photoSize.width, height: photoSize.height})}></img>
			        })}
                    <AngleDoubleRight style={this.styles.navbarArrowRight}/>
			    </div>
                <SeparateLine width="100%"/>
			    <span style={this.styles.photoNav}>
			        {this.state.paintingTitle}
			    </span>
			    <div style={this.styles.displayScreen}>
                    <img style={this.styles.displayPhoto} src={this.state.showPainting?this.state.showPainting.src:this.state.defaultImageUrl}></img>
			    </div>
			</div>
		)
	}
}

let styles = {
    photoBox: {
        margin: "0px auto",
    },
    photo: {
        display: "inline-block",
        cursor: "pointer"
    },
    photoListScreen: {
        display: "block",
        margin: "0px auto",
        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        minHeight: "100px",
        '@media (max-width: 800px)': {
            width: "80%",
        },
    },
    photoNav: {
        display: "block",
        height: "60px",
        lineHeight: "60px",
        fontSize: "1.5em",
        color: "black",
        textAlign: "center"
    },
    navbarArrowLeft: {
        display: "inline-block",
        position: "absolute",
        marginTop: "70px",
        left: "10px",
        fontSize: "40px",
        color: "#CCCCCC"
    },
    navbarArrowRight: {
        display: "inline-block",
        position: "absolute",
        marginTop: "70px",
        right: "10px",
        fontSize: "40px",
        color: "#CCCCCC",
    },
    displayScreen: {
        display: "block",
        margin: "0px auto",
        height: "600px",
        overflowX: "hidden",
        overflowY: "hidden",
        '@media (max-width: 800px)': {
            height: "250px",
        },
    },
    displayPhoto: {
        height: "100%",
        marginLeft: "50%",
        minWidth: "50px",
        border: "1px solid black",
        backgroundColor: "#EFEFEF",
        transform: "translate(-50%, 0%)",
    },
}

export default Radium(TinyPhotoBox)
