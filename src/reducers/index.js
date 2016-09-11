import { combineReducers } from 'redux'
import drawings from './drawings'
import articles from './articles'

const rootReducer = combineReducers({
	drawings,
	articles
})

export default rootReducer
