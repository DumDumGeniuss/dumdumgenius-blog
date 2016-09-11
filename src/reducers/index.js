import { combineReducers } from 'redux'
import drawings from './drawings'
import youtubes from './youtubes'
import diaries from './diaries'
import articles from './articles'

const rootReducer = combineReducers({
	drawings,
	youtubes,
	diaries,
	articles
})

export default rootReducer
