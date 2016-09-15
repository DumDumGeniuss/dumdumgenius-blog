import React     from 'react';
import { Route, IndexRoute } from 'react-router'

/* Profile */
import Profile from '../containers/profile/Profile.jsx'

/* Welcome */
import Welcome from '../containers/welcome/Welcome.jsx'

/* Articles */
import Tutorials from '../containers/tutorials/Tutorials.jsx'
import Tutorial from '../containers/tutorials/tutorial/Tutorial.jsx'
import TutorialsByCateg from '../containers/tutorials/TutorialsByCateg.jsx'
import CreateTutorial from '../containers/tutorials/createTutorial/CreateTutorial.jsx'
import UpdateTutorial from '../containers/tutorials/updateTutorial/UpdateTutorial.jsx'



import Demo from '../containers/demo/Demo'
import Demo2 from '../containers/demo/Demo2'

/* MasterPieces */
import CreateDrawing from '../containers/masterpieces/drawings/createDrawing/CreateDrawing.jsx'
import Drawings from '../containers/masterpieces/drawings/drawings/Drawings.jsx'
import DrawingsSlide from '../containers/masterpieces/drawings/drawingsSlide/DrawingsSlide.jsx'

/* Layout */
import Layout from '../components/layout/main/Layout.jsx'
import MasterpiecesLayout from '../components/layout/masterpieces/Layout.jsx'

export default (
	<Route path="/" component={Layout}>
	    <IndexRoute component={Welcome}>
	    </IndexRoute>
	    <Route path="profile" component={Profile}>
	    </Route>
	    <Route path="masterpieces" component={MasterpiecesLayout}>
	        <Route path="drawings">
	        	<IndexRoute component={Drawings}>
	        	</IndexRoute>
	        	<Route path="create" component={CreateDrawing}>
	        	</Route>
	        	<Route path="slideShow" component={DrawingsSlide}>
	        	</Route>
	        </Route>
	    </Route>
	    <Route path="tutorials">
	        <IndexRoute component={Tutorials}>
	        </IndexRoute>
	        <Route path="new" component={CreateTutorial}>
	        </Route>
	        <Route path=":id/update" component={UpdateTutorial}>
	        </Route>
	        <Route path=":category/:id" component={Tutorial}>
	        </Route>
	        <Route path=":category" component={TutorialsByCateg}>
	        </Route>
	    </Route>
		<Route path="demo" component={Demo}>
		</Route>
		<Route path="demo2" component={Demo}>
		</Route>
	</Route>
)