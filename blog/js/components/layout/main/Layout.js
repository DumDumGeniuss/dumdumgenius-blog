import React from 'react'
import Navbar from './Navbar.js'
import Footer from './footer.js'

export default class Layout extends React.Component {
	render() {
        let styles = {
            mainDiv: {
            }
        }
		return (
            <div>
                <Navbar />
                <div style={styles.mainDiv}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
   		)
	}
}

