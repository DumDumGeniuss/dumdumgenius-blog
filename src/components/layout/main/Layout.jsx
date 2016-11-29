import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default class Layout extends React.Component {
	render() {
        const style = require('./Layout.scss')
		return (
            <div>
                <Navbar />
                <div className={style.mainArea}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
   		)
	}
}

