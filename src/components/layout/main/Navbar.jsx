import React from 'react'
import {Link} from 'react-router'

import ObjectAssign from 'object-assign'

import User from 'react-icons/lib/fa/user'
import Image from 'react-icons/lib/fa/image'
import Book from 'react-icons/lib/fa/book'
import StickyNote from 'react-icons/lib/fa/sticky-note'

import Home from 'react-icons/lib/fa/home'

const scrollThreshold = 400

class Navbar extends React.Component {

    constructor() {
        super()
        const style = require('./Navbar.scss')
        this.state = {
            scrollTop: 0,
            navbarClass: style.navbar
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
	componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll(event) {
        const style = require('./Navbar.scss')
        this.setState({
            scrollTop: event.srcElement.body.scrollTop
        })

        if(this.state.scrollTop > 0 && this.state.navbarClass !== style.navbarFixed) {
            this.setState({
                navbarClass: style.navbarFixed
            })
        }
        if(this.state.scrollTop === 0 && this.state.navbarClass !== style.navbar) {
            this.setState({
                navbarClass: style.navbar
            })
        }
    }
	render() {
        let navbarClass = this.state.navbarClass;
        const style = require('./Navbar.scss')

		return (
			<div>
                <nav className={navbarClass}>
                    <Link className={style.navbarItem} to="/">Home</Link>
                    <Link className={style.navbarItem} to="/profile">Profile</Link>
                    <Link className={style.navbarItem} to="/tutorials">Tutorials</Link>
                    <Link className={style.navbarItem} to="/masterpieces/drawings">Masterpieces</Link>

                    <Link className={style.navbarItemCollapse} to="/">
                        <Home />
                    </Link>
                    <Link className={style.navbarItemCollapse} to="/profile">
                         <User />
                    </Link>
                    <Link className={style.navbarItemCollapse} to="/tutorials">
                        <Book />
                    </Link>
                    <Link className={style.navbarItemCollapse} to="/masterpieces/drawings">
                        <Image  />
                    </Link>
                </nav>
			</div>
		)
	}
}

export default Navbar
