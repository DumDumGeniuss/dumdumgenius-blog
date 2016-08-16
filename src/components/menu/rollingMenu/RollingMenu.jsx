import React from 'react'
import {Link} from 'react-router'
import Star from 'react-icons/lib/fa/star'

if (process.env.BROWSER) {
    require('./RollingMenu.css')
}

class RollingMenu extends React.Component {
    constructor(props) {
        super(props)
        this.window = process.env.BROWSER===true?window:undefined;

        this.state = {
            menuRadius: (this.window)?window.innerWidth/2:0,
            menuDegree: 0,
            targetDegree: 0,
            currentMenuIndex: 0
        }
        this.resetSize = this.resetSize.bind(this)
    }
    componentWillMount() {
        if(this.window) {    
            window.addEventListener('resize', this.resetSize)
        }
    }
    componentDidMount() {
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resetSize)
        this.killScroll()
    }
    resetSize(e) {
        this.setState({
            menuRadius: window.innerWidth/2
        })
    }
    calcItemsLocation(menus, degree, radius) {
        let period = 360/menus.length * (Math.PI/180)
        let items = []
        for(var i = 0; i < menus.length; i++) {
            let newDegree = degree + period*i
            items.push({
                name: menus[i].name,
                degree: newDegree,
                left: radius*(1 - Math.cos(newDegree)),
                top: radius*(1 - Math.sin(newDegree)),
                link: menus[i].link
            })
        }
        return items
    }
    rollMenu(direc, number) {
        const self = this
        if(number == 0) {
            return;
        }
        if(self.state.menuDegree === self.state.targetDegree) {
            let period = 360/number * (Math.PI/180)
            let movingRange = direc===1?period:-period
            let target = self.state.menuDegree + movingRange
            let newCurrentMenuIndex = direc===1?self.state.currentMenuIndex-1:self.state.currentMenuIndex+1

            self.setState({
                targetDegree: target,
                currentMenuIndex: newCurrentMenuIndex < 0?newCurrentMenuIndex+number:newCurrentMenuIndex%number
            })

            self.rollingMenu = setInterval(function() {
                if(target > self.state.menuDegree && direc) {
                    self.setState({
                        menuDegree: self.state.menuDegree+0.02
                    })
                } else if(target < self.state.menuDegree && !direc) {
                    self.setState({
                        menuDegree: self.state.menuDegree-0.02
                    })
                } else {
                    self.setState({
                        menuDegree: target
                    })
                    self.killScroll()
                }
            }, 15)
        }
    }
    killScroll() {
        const self = this
        window.clearInterval(self.rollingMenu)
        self.rollingMenu = undefined
    }
    render() {
        let self = this

        let menus = self.props.menus
        let title = self.props.title
        
        //states
        let state = self.state
        let menuRadius = state.menuRadius
        let menuDegree = state.menuDegree
        let currentMenuIndex = state.currentMenuIndex

        let menuItems = self.calcItemsLocation(menus, menuDegree, menuRadius)
        let subTitle = menuItems[currentMenuIndex]?menuItems[currentMenuIndex].name:''
        console.log(currentMenuIndex)
        return (
        	<div className="RollingMenu-mainArea">
                <div className="RollingMenu-menu" 
                    style={ {
                        width: menuRadius*2+'px',
                        height: menuRadius*2+'px',
                        perspective: (500 + (menuRadius-200) )+'px'
                    } }>
                    <div className="RollingMenu-menu3d">
                        <div className="RollingMenu-circle">
                        </div>
                        {menuItems.map(function(item, index) {
                            let link = item.link
                            return (
                                <Link key={item.name} to={link}>
                                    <div className="RollingMenu-item"
                                        style={ {
                                                left: item.left+'px',
                                                top: item.top+'px',
                                                transform: 'translateX(-50%) rotateY(-90deg) rotateX(' + item.degree*360/(Math.PI*2) +'deg)'
                                        } }>
                                        <Star style={ {color: currentMenuIndex===index?'yellow':'white'} }/>
                                        <div className="RollingMenu-itemText">
                                            {item.name}
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <span className="RollingMenu-titleText">{title}</span>
                <span className="RollingMenu-subTitleText">{subTitle}</span>
                <Link to={this.props.backPath?this.props.backPath:'/'}>
                    <span className="RollingMenu-squenceButton" style= { {bottom: '110px', left: '20px', display: self.props.backPath?'inline-block':'none'} }>Back</span>
                </Link>
                <span className="RollingMenu-squenceButton" style= { {bottom: '60px', left: '20px'} } onClick={ self.rollMenu.bind(self, 1, menus.length) }>Prev</span>
                <span className="RollingMenu-squenceButton" style= { {bottom: '10px', left: '20px'} } onClick={ self.rollMenu.bind(self, 0, menus.length) }>Next</span>
        	</div>
        )
    }
}


export default RollingMenu