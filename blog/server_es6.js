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

const app = Express()
const port = 4000
// console.log(__dirname + '/main.min.js')
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
	
  		const initialState = store.getState()
	
  		res.send(renderFullPage(html, initialState))
	})
}

function renderFullPage(html, initialState) {
  	return `
  	  	<!doctype html>
  	  	<html>
  	  	  	<head>
  	  	  	 	<title>DumDumGenius' blog</title>
  	  	  	</head>
  	  	  	<body>
  	  	  	  	<div id="root">${html}</div>
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
