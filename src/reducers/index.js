import { combineReducers } from 'redux'
import paintings from './paintings'
import youtubes from './youtubes'
import diaries from './diaries'
import articles from './articles'

const rootReducer = combineReducers({
	paintings,
	youtubes,
	diaries,
	articles
})

export default rootReducer
