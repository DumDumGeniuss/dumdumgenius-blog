import React from 'react'
import ObjectAssign from 'object-assign'
if (process.env.BROWSER) {
    require('./SeparateLine.css')
}

class SeparateLine extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
    	let width = this.props.width
        return (
        	<div style={ObjectAssign({width: width?width:"60%"})} className="SeparateLine-separateLine">
        	</div>
        )
    }
}


export default SeparateLine