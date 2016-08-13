import React     from 'react';
import { Route, IndexRoute } from 'react-router'

/* Profile */
import Profile from '../containers/profile/Profile.jsx'

/* Welcome */
import Welcome from '../containers/welcome/Welcome.jsx'

/* Articles */
import Tutorials from '../containers/tutorials/Tutorials.jsx'
import Tutorial from '../containers/tutorials/Tutorial.jsx'
import TutorialsByCateg from '../containers/tutorials/TutorialsByCateg.jsx'
import CreateTutorial from '../containers/tutorials/createTutorial/CreateTutorial.jsx'

/* Diaries */
import Diaries from '../containers/diaries/diaries/Diaries'
import CreaetDiaries from '../containers/diaries/create/Create'
import Diary from '../containers/diaries/diary/Diary'

import Facebook from '../containers/facebook/Facebook'
import Demo from '../containers/demo/Demo'
import Demo2 from '../containers/demo/Demo2'

/* MasterPieces */
import Paintings from '../containers/masterpieces/paintings/Paintings'
import Youtubes from '../containers/masterpieces/youtubes/Youtubes'

/* Layout */
import Layout from '../components/layout/main/Layout.jsx'
import MasterpiecesLayout from '../components/layout/masterpieces/Layout'
import DiariesLayout from '../components/layout/diaries/Layout'

export default (
	<Route path="/" component={Layout}>
	    <IndexRoute component={Welcome}>
	    </IndexRoute>
	    <Route path="profile" component={Profile}>
	    </Route>
	    <Route path="masterpieces" component={MasterpiecesLayout}>
	        <IndexRoute component={Paintings}>
	        </IndexRoute>
	        <Route path="youtubes" component={Youtubes}>
	        </Route>
	    </Route>
	    <Route path="diaries" component={DiariesLayout}>
	        <IndexRoute component={Diaries}>
	        </IndexRoute>
	        <Route path="create" component={CreaetDiaries}>
	        </Route>
	        <Route path=":id" component={Diary}>
	        </Route>
	    </Route>
	    <Route path="tutorials">
	        <IndexRoute component={Tutorials}>
	        </IndexRoute>
	        <Route path="new" component={CreateTutorial}>
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
		<Route path="facebook" component={Facebook}>
		</Route>
	</Route>
)