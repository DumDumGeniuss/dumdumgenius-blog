delete process.env.BROWSER

import Express from 'express'
import React from 'react'
import _ from 'lodash'
import { match, RouterContext } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ReactDomServer from 'react-dom/server'

import Promise from 'promise'
import rp from 'request-promise'
import url from 'url'

import blogStore from '../src/store/blogStore'
import createLocation from 'history/lib/createLocation'
import rootReducer from '../src/reducers'
import routes from '../src/route/routes.jsx'
import firebase from '../src/services/firebase'

import config from '../server/config/production'


const app = Express()
const port = config.port
app.use(Express.static(__dirname + '/public'))

app.use('/tutorials/:id/update', function(req, res) {
    let params = req.params;
    let completeUrl = req.protocol + '://' + req.get('host') + req.originalUrl

    rp.get({
        url: config.apiUrl + '/articles/' + params.id,
        json: true
    })
    .then(function(result) {
        let initialState = {
            articles: {
                article: result.data
            }
        }
        let ogTagParams = {
            url: completeUrl,
            type: 'Tutorials',
            title: result.data.title,
            description: result.data.content
        }
        handleRender(req, res, initialState, ogTagParams)
    })
})

app.use('/tutorials/:category/:id', function(req, res) {
    let params = req.params;
    let completeUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    let queryString = url.format({
        query: {
            category: params.category
        }
    })

    Promise.all([
        rp.get({
            url: config.apiUrl + '/articles/' + params.id,
            json: true
        }),    
        rp.get({
            url: config.apiUrl + '/articles' + queryString,
            json: true
        })
    ])
    .then(function(results) {
        console.log(results)
        let initialState = {
            articles: {
                article: results[0].data,
                articles: results[1].data
            }
        }
        let ogTagParams = {
            url: completeUrl,
            type: 'Tutorials',
            title: results[0].data.title,
            description: results[0].data.content
        }
        handleRender(req, res, initialState, ogTagParams)
    })
})

app.use('/tutorials/:category', function(req, res) {
    let params = req.params;
    let completeUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    let queryString = url.format({
        query: params
    })

    rp.get({
        url: config.apiUrl + '/articles' + queryString,
        json: true
    })
    .then(function(result) {
        let initialState = {
            articles: {
                articles: result.data
            }
        }
        let ogTagParams = {
            url: completeUrl,
            type: 'Tutorials',
            title: params.category,
            description: "It's my tutorials about " + params.category + ", enjoy it!"
        }
        handleRender(req, res, initialState, ogTagParams)
    })
})

app.use('/tutorials', function(req, res) {
    const params = req.params;
    const completeUrl = req.protocol + '://' + req.get('host') + req.originalUrl

    rp.get({
        uri: config.apiUrl + '/articles/info/categories'
    })
    .then(function(result) {
        let initialState = {
            articles: {
                categories: result.data
            }
        }
        let ogTagParams = {
            url: completeUrl,
            type: 'tutorials',
            title: "Tutorials",
            description: "Hey, I wrote some tutorials here, pick on topic and enjoy it!"
        }
        handleRender(req, res, initialState, ogTagParams)
    })
})

app.use('/diaries/:id', function(req, res) {
    const params = req.params,
        completeUrl = req.protocol + '://' + req.get('host') + req.originalUrl

    firebase.database().ref('diaries/' + params.id).once('value')
        .then(function(result) {
            const diary = result.val(),
                initialState = {
                    diaries: {
                        diary: diary,
                        diaryUrl: completeUrl
                    }
                },
                ogTagParams = {
                    url: completeUrl,
                    type: 'diary',
                    title: diary.title,
                    description: diary.content.substring(0,200)
                }
            handleRender(req, res, initialState, ogTagParams)
        })
})

app.use('/diaries', function(req, res) {
    const completeUrl = req.protocol + '://' + req.get('host') + req.originalUrl

    firebase.database().ref('diaries').once('value')
        .then(function(result) {
            const diary = result.val(),
                initialState = {
                    diaries: {
                        diaries: toArray(result.val())
                    }
                },
                ogTagParams = {
                    url: completeUrl,
                    type: 'diaries',
                    title: "dumdumgenius' diaries board",
                    description: "Here are various diaries about my life, like movies, journals and of course"
                      + " my technical shares, hope you will enjoy it, thank you for your visit."
                }
            handleRender(req, res, initialState, ogTagParams)
        })
})

app.use('/masterpieces', function(req, res) {
    const query = req.query,
        params = req.params,
        completeUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    firebase.database().ref('paintings').once('value')
        .then(function(result) {
            const paintings = result.val(),
                initialState = {
                    paintings: {
                        paintings: paintings
                    }
                },
                ogTagParams = {
                    url: completeUrl,
                    type: 'paintings',
                    title: "dumdumgenius' paintings",
                    description: "I like paintings, althought I'm not not so well on it."
                        + " But, you cant fall in love with something by no reason, right ?"
                }
            handleRender(req, res, initialState, ogTagParams)
        })
})

app.use('*', function(req, res) {
    const initialState = {},
        ogTagParams = {
            url: "http://dumdumgenius.com",
            type: 'blog',
            title: "DumDumGenius' Blog",
            description: "Welcome to dumdumgenius' blog, it's my first blog, enjoy every thing you see"
                + " and of course, if you have any advice to me, please contact me, the email can be found"
                + " in about me page, thank you, sincerely, Messi Yang"
        }
    handleRender(req, res, initialState, ogTagParams)
})

function toArray(map) {
    let array = []
    for(let key in map) {
        let item = map[key]
        item.id = key
        array.push(item)
    }
    return array
}

function handleRender(req, res, initialState, ogTagParams) {

  	const store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
  	    location = createLocation(req.originalUrl)

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

	
  		res.send(renderFullPage(html, initialState, ogTagParams))
	})
}

function renderFullPage(html, initialState, ogTagParams) {
  	return `
  	  	<!doctype html>
  	  	<html>
  	  	  	<head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="google-site-verification" content="mU8vb5Hbce4m1TA7OFv5zsdvntNy-sHQ_6PZfFUsbeM" />
                <meta property="og:url" content="${ogTagParams.url}" />
                <meta property="og:type" content="${ogTagParams.type}" />
                <meta property="og:title" content="${ogTagParams.title}" />
                <meta property="og:description" content="${ogTagParams.description}" />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/myblog-1decf.appspot.com/o/coverImages%2FfbCoverPhoto.jpg?alt=media" />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="200" />
  	  	  	 	<title>${ogTagParams.title}</title>
                <link rel="stylesheet" type="text/css" href="/styles.css">
                <style>
                    body {
                        margin: 0px;
                    }
        
                    * {
                        box-sizing: border-box;
                        font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
                    }
                    
                    a {
                        text-decoration: none;
                        cursor: none;
                    } 
        
                    a:hover {
                    }
                </style>  
                <!-- Google Analytics-->
                <script>
                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                    
                    ga('create', 'UA-82279826-1', 'auto');
                    ga('send', 'pageview');
                </script>
  	  	  	</head>
  	  	  	<body>
                <!-- For Facebook Comments -->
                <div id="fb-root"></div>

  	  	  	  	<div id="app">${html}</div>
  	  	  	  	<script>
  	  	  	    	window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
  	  	  	  	</script>
  	  	  	  	<script src="/main.min.js" charset="utf-8"></script>
  	  	  	</body>
  	  	</html>
  	  	`
}

app.listen(port, function() {
	console.log('Start!')
})
