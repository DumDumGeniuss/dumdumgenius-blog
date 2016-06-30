import Express from 'express'
import React from 'react'
import blogStore from './dist/store/blogStore'
import { Provider } from 'react-redux'
import rootReducer from './dist/reducers'
import App from './dist/route/AllRoutes'

const app = Express()
const port = 4000

app.listen(port, function() {
	console.log('Start!')
})
