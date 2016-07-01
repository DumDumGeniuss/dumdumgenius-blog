import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import routes from './routes.jsx'

export default class AllRoutes extends React.Component {
	constructor(props) {
        super(props)
  //       match({ routes, location: '/' }, function(error, redirectLocation, renderProps) {
		// 	console.log('hey',routes)
		// })
    }
	render() {
		return (
			<Router history={browserHistory}>
			    {routes}
			</Router>
		)
	}
}
