import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

if (process.env.BROWSER) {
    require('./Layout.css')
}

export default class Layout extends React.Component {
	render() {
		return (
            <div>
                <Navbar />
                <div>
                    {this.props.children}
                </div>
                <Footer />
            </div>
   		)
	}
}

