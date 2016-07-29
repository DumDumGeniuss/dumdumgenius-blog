import React     from 'react';
import { Route, IndexRoute } from 'react-router'

/* About me */
import AboutMe from '../pages/aboutMe/AboutMe'
import Profile from '../pages/profile/Profile'

/* Welcome */
import Welcome from '../pages/welcome/Welcome'

/* Diaries */
import Diaries from '../pages/diaries/diaries/Diaries'
import CreaetDiaries from '../pages/diaries/create/Create'
import Diary from '../pages/diaries/diary/Diary'

import Facebook from '../pages/facebook/Facebook'
import Demo from '../pages/demo/Demo'

/* MasterPieces */
import Paintings from '../pages/masterpieces/paintings/Paintings'
import Youtubes from '../pages/masterpieces/youtubes/Youtubes'

/* Layout */
import Layout from '../components/layout/main/Layout'
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
		<Route path="demo" component={Demo}>
		</Route>
		<Route path="facebook" component={Facebook}>
		</Route>
	</Route>
)