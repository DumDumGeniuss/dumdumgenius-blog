import React from 'react'
import {Link} from 'react-router'


class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const self = this
        let { articles, article } = self.props
        let menus = articles || []
        const style = require('./SideMenu.scss')

    	return (
    		<div>
                <h1 className={style.title}>
                    {article?article.category:''}
                </h1>
                {menus.map(function(item) {
                    return (
                        <Link key={item._id} to={'/tutorials/' + item.category + '/' + item._id} className={style.menuItem}>
                            {item.title}
                        </Link>
                    )
                })}
    		</div>
    	)
    }
}


export default SideMenu
