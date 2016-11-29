import React from 'react'
import {Link} from 'react-router'
import Markdown from 'react-remarkable'


class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const self = this
        let { article } = self.props
        article = article?article:{}
        const style = require('./Article.scss')

    	return (
    		<div className={style.mainArea}>
                <h1 className={style.title}>{article.title}</h1>
                <Markdown>
                    {article.content}
                </Markdown>
    		</div>
    	)
    }
}


export default Article
