import { combineReducers } from 'redux'
import paintings from './paintings'
import youtubes from './youtubes'
import diaries from './diaries'

const rootReducer = combineReducers({
	paintings,
	youtubes,
	diaries
})

export default rootReducer
