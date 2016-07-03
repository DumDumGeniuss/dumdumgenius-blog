import React from 'react'
import AngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'
import AngleDoubleRight from 'react-icons/lib/fa/angle-double-right'
import SeparateLine from '../../line/SeparateLine'

if (process.env.BROWSER) {
    require('./TinyPhotoBox.css')
}

class TinyPhotoBox extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            currentShowIndex: 0,
            showPainting: null,
            paintingTitle: 'Pick the one you like !',
            defaultImageUrl: 'https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/paintings%2FdefaultImage.png?alt=media',
            displayPhotoClass: "TinyPhotoBox-displayPhoto"
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
            displayPhotoClass: "TinyPhotoBox-displayPhoto"
        })
	}
    photoOnLoad() {
        const self = this
        window.setTimeout(function() {
            self.setState({
                displayPhotoClass: "TinyPhotoBox-displayPhoto TinyPhotoBox-showIn"
            })
        },40)
    }
	render() {
		const self = this
		let photoSize = this.props.photoSize,
		    boxSize = this.props.boxSize,
		    paintings = this.props.paintings,
            photoListSize = this.props.photoListSize,
            displayPhotoClass = this.state.displayPhotoClass
		return (
			<div style={Object.assign({width: boxSize.width, height: boxSize.height})}
                className="TinyPhotoBox-photoBox">
			    <div style={Object.assign({width: photoListSize.width})}
                    className="TinyPhotoBox-photoListScreen">
                    <AngleDoubleLeft className="TinyPhotoBox-navbarArrowLeft"/>
			        {paintings.map(function(result) {
                        return <img onClick={self.setShowPainting.bind(self, result.id, paintings)} 
                                    key={result.id} src={result.src} 
                                    style={Object.assign({width: photoSize.width, height: photoSize.height})}
                                    className="TinyPhotoBox-photo"></img>
			        })}
                    <AngleDoubleRight className="TinyPhotoBox-navbarArrowRight"/>
			    </div>
			    <span className="TinyPhotoBox-photoNav">
			        {this.state.paintingTitle}
			    </span>
			    <div className="TinyPhotoBox-displayScreen">
                    <img className={displayPhotoClass}
                        onLoad={self.photoOnLoad.bind(self)} 
                        src={this.state.showPainting?this.state.showPainting.src:this.state.defaultImageUrl}>
                    </img>
			    </div>
			</div>
		)
	}
}

export default TinyPhotoBox
