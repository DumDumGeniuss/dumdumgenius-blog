import React from 'react'
import config from '../../../constants/config'
import {Link} from 'react-router'

export default class SimplePhotoBox extends React.Component {
    constructor(props) {
        super(props)
    }
	render() {
		const self = this
		let props = self.props
		let photo = props.photo
        const style = require('./SimplePhotoBox.scss')
		// <a className="SimplePhotoBox-photoLink" href="http://www.mitie.com/media-library/services/specialist-services/pest-control/pest-photos/cockroach.jpg">
		return (
			<div className={style.mainArea}>
				<div className={style.deleteIcon}>{this.props.children}</div>
				<Link to={"/masterpieces/drawings/slideShow?drawingId=" + photo._id}>
					<img className={style.photo} src={config.apiUrl + '/files/drawings/' + photo.fileName}/>
				</Link>
			</div>
		)
	}
}
