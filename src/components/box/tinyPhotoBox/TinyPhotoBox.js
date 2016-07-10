import React from 'react'
import SeparateLine from '../../line/SeparateLine'

import AngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'
import AngleDoubleRight from 'react-icons/lib/fa/angle-double-right'
import ArrowRight from 'react-icons/lib/fa/arrow-right'
import Spinner from 'react-icons/lib/fa/spinner'

if (process.env.BROWSER) {
    require('./TinyPhotoBox.css')
}

class TinyPhotoBox extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            currentShowIndex: 0,
            showPainting: null,
            defaultImageUrl: 'https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/paintings%2FdefaultImage.png?alt=media',
            displayPhotoClass: "TinyPhotoBox-displayPhoto",
            spinnerClass: "TinyPhotoBox-displayNone",
            paintingTitle: 'Select One Picture',
            currentPaintingKey: '0'
        }
    }
	componentDidMount() {
	}
    componentWillMount() {
    }
	setShowPainting(key, paintings) {
        const self = this
        self.setState({
        	showPainting: paintings[key],
            paintingTitle: paintings[key].title,
            displayPhotoClass: "TinyPhotoBox-displayNone",
            spinnerClass: "TinyPhotoBox-spinner",
            currentPaintingKey: key
        })
	}
    slidePhoto(direction, paintings) {
        if(direction == 'left') {
            let key = parseInt(this.state.currentPaintingKey)-1
            if(paintings[key + '']) {
                this.setShowPainting(key+'', paintings)
                this.setStaet({
                    currentPaintingKey: key + ''
                })
            }
        } else {
            let key = parseInt(this.state.currentPaintingKey)+1
            if(paintings[key + '']) {
                this.setShowPainting(key+'', paintings)
                this.setStaet({
                    currentPaintingKey: key + ''
                })
            }
        }
    }
    photoOnLoad() {
        const self = this
        window.setTimeout(function() {
            self.setState({
                displayPhotoClass: "TinyPhotoBox-displayPhoto TinyPhotoBox-showIn",
                spinnerClass: "TinyPhotoBox-displayNone",
            })
        },40)
    }
	render() {
		const self = this
		let photoSize = this.props.photoSize,
		    boxSize = this.props.boxSize,
		    paintings = this.props.paintings,
            photoListSize = this.props.photoListSize,
            displayPhotoClass = this.state.displayPhotoClass,
            spinnerClass = this.state.spinnerClass
		return (
			<div style={Object.assign({width: boxSize.width, height: boxSize.height})}
                className="TinyPhotoBox-photoBox">
			    <div style={Object.assign({width: photoListSize.width})}
                    className="TinyPhotoBox-photoListScreen">
			        {paintings.map(function(result) {
                        return <img onClick={self.setShowPainting.bind(self, result.id, paintings)} 
                                    key={result.id} src={result.src} 
                                    style={Object.assign({width: photoSize.width, height: photoSize.height})}
                                    className="TinyPhotoBox-photo"></img>
			        })}
			    </div>
			    <div className="TinyPhotoBox-slideMessage">
			        <ArrowRight className="TinyPhotoBox-fingerSlide"/>
			    </div>
                <span className="TinyPhotoBox-titleContext">
                    {this.state.paintingTitle}
                </span>
                <div className="TinyPhotoBox-displayBox">
                    <AngleDoubleLeft onClick={this.slidePhoto.bind(this, "left", paintings)} className="TinyPhotoBox-navbarArrowLeft"/>
			        <div className="TinyPhotoBox-displayScreen">
                        <Spinner className={spinnerClass}/>
                        <img className={displayPhotoClass}
                            onLoad={self.photoOnLoad.bind(self)} 
                            src={this.state.showPainting?this.state.showPainting.src:this.state.defaultImageUrl}>
                        </img>
			        </div>
                    <AngleDoubleRight onClick={this.slidePhoto.bind(this, "right", paintings)} className="TinyPhotoBox-navbarArrowRight"/>
                </div>
			</div>
		)
	}
}

export default TinyPhotoBox
