import React from 'react'
import Navbar from './Navbar.js'
import Footer from './footer.js'

import './Layout.css'

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

