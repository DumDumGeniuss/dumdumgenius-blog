import React from 'react'
import {Link} from 'react-router'
import Markdown from 'react-remarkable'

if (process.env.BROWSER) {
    require('./Article.css')
}

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

    	return (
    		<div className='Article-mainArea'>
                <h1 className="Article-title">{article.title}</h1>
                <Markdown>
                    {article.content}
                </Markdown>
    		</div>
    	)
    }
}


export default Article