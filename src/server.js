delete process.env.BROWSER

import Express from 'express'
import path from 'path';
import React from 'react'
import _ from 'lodash'
import { match, RouterContext } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ReactDomServer from 'react-dom/server'

import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpack from 'webpack'
import webpackConfig from '../tools/webpack.dev.config.js'
import WebpackIsomorphicTools from 'webpack-isomorphic-tools'

import Promise from 'promise'
import rp from 'request-promise'
import url from 'url'

import blogStore from './store/blogStore'
import createLocation from 'history/lib/createLocation'
import rootReducer from './reducers'
import routes from './route/routes.jsx'
import Html from './components/Html/Html.jsx'

import config from './config/production'

const rootDir = path.resolve(__dirname, '..');

global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../tools/webpack-isomorphic-tools.js'))
    .development(process.env.NODE_ENV === 'development')
    .server(rootDir, () => {
        require('./server.js');
    });

const app = Express()
const port = config.port
app.use(Express.static(path.join(__dirname, '..', 'public')));

if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        hot: true,
        filename: 'bundle.js',
        stats: {
            colors: true,
        },
        historyApiFallback: true,
    }));

    app.use(webpackHotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000,
    }));
}

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
            description: result.data.content.substring(0,200)
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
            description: results[0].data.content.substring(0,200)
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
        uri: config.apiUrl + '/articles/info/categories',
        json: true
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

    if (process.env.NODE_ENV === 'development') {
        global.webpackIsomorphicTools.refresh();
    }

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

    	const reactHtml = ReactDomServer.renderToString(
  			<Provider store={store}>
    			<RouterContext {...renderProps} />
  			</Provider>
    	)

        const html = ReactDomServer.renderToStaticMarkup(
            <Html assets={global.webpackIsomorphicTools.assets()} reactHtml={reactHtml} store={store} globalStyle={styleScript()} googleAnalytic={googleScript()}/>
        );
        res.send(`<!doctype html>${html}`);
	})
}

function styleScript() {
    return `
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
    `;
}

function googleScript() {
    return `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-82279826-1', 'auto');
        ga('send', 'pageview');
    `;
}

app.listen(port, function() {
	console.log('Start!')
})
