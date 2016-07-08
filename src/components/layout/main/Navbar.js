import React from 'react'
import {Link} from 'react-router'

import Facebook from 'react-icons/lib/fa/facebook'
import Github from 'react-icons/lib/fa/github'
import Twitter from 'react-icons/lib/fa/twitter'
import Google from 'react-icons/lib/fa/google'
import ObjectAssign from 'object-assign'

import User from 'react-icons/lib/fa/user'
import Image from 'react-icons/lib/fa/image'
import Book from 'react-icons/lib/fa/book'
import StickyNote from 'react-icons/lib/fa/sticky-note'

if (process.env.BROWSER) {
    require('./Navbar.css')
}

class Navbar extends React.Component {

    constructor() {
        super()
        this.state = {
            scrollTop: 0,
            navbarClass: 'MainNavbar-navbar',
            backgroundAreaClass: 'MainNavbar-backgroundArea'
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
	componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll(event) {
        this.setState({
            scrollTop: event.srcElement.body.scrollTop
        })

        if(this.state.scrollTop<300) {
            if(this.state.navbarClass !== 'MainNavbar-navbar') {
                this.setState({
                    navbarClass: 'MainNavbar-navbar'
                })
            }
            if(this.state.backgroundAreaClass !== 'MainNavbar-backgroundArea') {
                this.setState({
                    backgroundAreaClass: 'MainNavbar-backgroundArea'
                })
            }
        }else if(this.state.scrollTop>300) {
            if(this.state.navbarClass !== 'MainNavbar-navbarFixed') {
                this.setState({
                    navbarClass: 'MainNavbar-navbarFixed'
                })
            }
            if(this.state.backgroundAreaClass !== 'MainNavbar-backgroundAreaHigh') {
                this.setState({
                    backgroundAreaClass: 'MainNavbar-backgroundAreaHigh'
                })
            }
        }
    }
	render() {
        let navbarClass = this.state.navbarClass,
            backgroundAreaClass = this.state.backgroundAreaClass
		return (
			<div>
			    <div className={backgroundAreaClass}>
			        <div className="MainNavbar-mainBackground">
                        <img src={"https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/welcomBackground3.jpg?alt=media"}></img>
			        </div>
			        <div className="MainNavbar-textArea">
			            <span className="MainNavbar-logoText">DumDumGenius</span>
			            <span className="MainNavbar-centerText">Fullstack Developer</span>
                        <div className="MainNavbar-logoArea">
                            <Facebook className="MainNavbar-faIcon"/>
                            <Github className="MainNavbar-faIcon"/>
                            <Twitter className="MainNavbar-faIcon"/>
                            <Google className="MainNavbar-faIcon"/>
                        </div>
			        </div>
			        <div className="MainNavbar-blockBackground">
			        </div>
			    </div>
			    <nav className={navbarClass}>
			        <Link className="MainNavbar-navbarItem" to="/">About me</Link>
			        <Link className="MainNavbar-navbarItem" to="/masterpieces">Masterpieces</Link>
                    <Link className="MainNavbar-navbarItem" to="/diaries">Diaries</Link>
			        <Link className="MainNavbar-navbarItem" to="/underConstruct">Tutorials</Link>
                    <Link className="MainNavbar-navbarItemCollapse" to="/">
                         <User />
                    </Link>
                    <Link className="MainNavbar-navbarItemCollapse" to="/masterpieces">
                        <Image  />
                    </Link>
                    <Link className="MainNavbar-navbarItemCollapse" to="/diaries">
                        <Book />
                    </Link>
                    <Link className="MainNavbar-navbarItemCollapse" to="/underConstruct">
                        <StickyNote />
                    </Link>
			    </nav>
			</div>
		)
	}
}

export default Navbar
