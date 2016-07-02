delete process.env.BROWSER

import Express from 'express'
import React from 'react'
import { match, RouterContext } from 'react-router'
import { createStore } from 'redux'
import ReactDomServer from 'react-dom/server'
import blogStore from './dist/store/blogStore'
import { Provider } from 'react-redux'
import createLocation from 'history/lib/createLocation'
import rootReducer from './dist/reducers'
import AboutMe from './dist/pages/aboutMe/AboutMe'
import routes from './dist/route/routes'
import IndexLayout from './dist/IndexLayout'

const app = Express()
const port = 3000
app.use(Express.static(__dirname))
app.use(handleRender)

function handleRender(req, res) {
  	// Create a new Redux store instance
  	const store = createStore(rootReducer),
  	    location = createLocation(req.url)

  	match({ routes, location }, function(error, redirectLocation, renderProps) {
    	// if (err) { 
    	//   console.error(err)
    	//   return res.status(500).end('Internal server error')
    	// }
    	if (!renderProps) {
    		return res.status(404).end('Not found.')
    	}
    	
    	const html = ReactDomServer.renderToString(
  			<Provider store={store}>
    			<RouterContext {...renderProps} />
  			</Provider>
    	)

        // const html = React.renderToStaticMarkup(
        //     <IndexLayout content={content} />
        // )
	
  		const initialState = store.getState()

        //res.send(html)
	
  		res.send(renderFullPage(html, initialState))
	})
}

function renderFullPage(html, initialState) {
  	return `
  	  	<!doctype html>
  	  	<html>
  	  	  	<head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta property="og:url" content="http://dumdumgenius.com" />
                <meta property="og:type" content="blog" />
                <meta property="og:title" content="DumDumGenius' Blog" />
                <meta property="og:description" content="This is DumDumGenius' (Messi Yang) blog, which contains my profile , masterpieces, also my tutorials and diaries." />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/selfPhoto2.jpg?alt=media" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="250" />
  	  	  	 	<title>DumDumGenius' blog</title>
                <style>
                    body {
                        margin: 0px;
                    }
        
                    * {
                        box-sizing: border-box;
                    }
                    
                    a {
                        text-decoration: none;
                        cursor: none;
                    } 
        
                    a:hover {
                    }
                </style>  
  	  	  	</head>
  	  	  	<body>
  	  	  	  	<div id="app">${html}</div>
  	  	  	  	<script>
  	  	  	    	window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
  	  	  	  	</script>
  	  	  	  	<script src="main.min.js" charset="utf-8"></script>
  	  	  	</body>
  	  	</html>
  	  	`
}

app.listen(port, function() {
	console.log('Start!')
})
