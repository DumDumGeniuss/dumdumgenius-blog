import React from 'react'
import AngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'
import AngleDoubleRight from 'react-icons/lib/fa/angle-double-right'
import SeparateLine from '../../line/SeparateLine'

if (process.env.BROWSER) {
    require('./TinyYoutubeBox.css')
}

class TinyYoutubeBox extends React.Component{
	constructor(props) {
        super(props)
        this.state = {
            currentShowIndex: 0,
            youtubeTitle: 'Pick the one you like !',
            playYoutubeUrl: 'https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/youtubes%2FdefaultImage.png?alt=media',
            youtubePlayWidth: 640,
            youtubePlayHeight: 480
        }
        this.handleResize = this.handleResize.bind(this)
    }
	componentDidMount() {
	}
    componentWillMount() {
        if (process.env.BROWSER) {
            window.addEventListener('resize', this.handleResize)
        }
    }
    componentWillUnmount() {
        if (process.env.BROWSER) {
            window.removeEventListener('resize', this.handleResize)
        }
    }
    handleResize(event) {
        var windowWidth = event.srcElement.window.innerWidth
        if(windowWidth < 800 && this.state.youtubePlayWidth == 640) {
            this.setState({
                youtubePlayWidth: 280,
                youtubePlayHeight: 210
            })
        } else if(windowWidth > 800 && this.state.youtubePlayWidth == 280) {
            this.setState({
                youtubePlayWidth: 640,
                youtubePlayHeight: 480
            })
        }
    }
	setShowYoutube(key, youtubes) {
        this.setState({
        	playYoutubeUrl: youtubes[key].url,
            youtubeTitle: youtubes[key].title
        })
	}
	render() {
		const self = this
		let youtubeSize = this.props.youtubeSize,
		    boxSize = this.props.boxSize,
		    youtubes = this.props.youtubes,
            youtubePhotoListSize = this.props.youtubePhotoListSize,
		    photoListScreenHeigth = youtubeSize.height
		return (
			<div style={Object.assign({width: boxSize.width, height: boxSize.height})} className="TinyYoutubeBox-photoBox">
                <SeparateLine width="100%"/>
			    <div className="TinyYoutubeBox-photoListScreen" style={Object.assign({width: youtubePhotoListSize.width})} >
                    <AngleDoubleLeft className="TinyYoutubeBox-navbarArrowLeft"/>
			        {youtubes.map(function(result) {
                        return <img onClick={self.setShowYoutube.bind(self, result.id, youtubes)} 
                                    key={result.id} 
                                    src={result.screenshot} 
                                    style={Object.assign({width: youtubeSize.width, height: youtubeSize.height})} 
                                    className="TinyYoutubeBox-photo">
                                </img>
			        })}
                    <AngleDoubleRight className="TinyYoutubeBox-navbarArrowRight"/>
			    </div>
                <SeparateLine width="100%"/>
			    <span className="TinyYoutubeBox-photoNav">
			        {this.state.youtubeTitle}
			    </span>
			    <div className="TinyYoutubeBox-displayVideoScreen">
                    <iframe src={this.state.playYoutubeUrl} 
                            width={this.state.youtubePlayWidth} 
                            height={this.state.youtubePlayHeight}>
                    </iframe>
			    </div>
			</div>
		)
	}
}

export default TinyYoutubeBox
