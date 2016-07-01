import React from 'react'

if (process.env.BROWSER) {
    require('./Layout.css')
}


class Layout extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
    	return (
    	    <div className="DiariesLayout-maindArea">
                <span className="DiariesLayout-titleFont">Diaries</span>
                <div className="DiariesLayout-diariesBox">
                    {this.props.children}
                </div>
    	    </div>
    	)
    }
}

export default Layout