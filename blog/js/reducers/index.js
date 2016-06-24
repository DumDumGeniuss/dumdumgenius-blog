import { combineReducers } from 'redux'
import paintings from './paintings'
import youtubes from './youtubes'

const rootReducer = combineReducers({
	paintings,
	youtubes
})

export default rootReducer
