import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import {StyleRoot} from 'radium'

import firebase from 'firebase'
import blogStore from './store/blogStore'

/* About me */
import AboutMe from './pages/aboutMe/AboutMe'

/* Diaries */
import Diaries from './pages/diaries/diaries/Diaries'
import CreaetDiaries from './pages/diaries/create/Create'
import Diary from './pages/diaries/diary/Diary'

import UnderConstruct from './pages/underConstruct/UnderConstruct'
import Facebook from './pages/facebook/Facebook'
import Demo from './pages/demo/Demo'

/* MasterPieces */
import Paintings from './pages/masterpieces/paintings/Paintings'
import Youtubes from './pages/masterpieces/youtubes/Youtubes'

/* Layout */
import Layout from './components/layout/main/Layout'
import MasterpiecesLayout from './components/layout/masterpieces/Layout'
import DiariesLayout from './components/layout/diaries/Layout'


const store = blogStore()
const app = document.getElementById('app')

let config = {
  apiKey: "AIzaSyBYZBZb122fhJLq_Pd-yoKOTA4ql4qf1tM",
  authDomain: "myblog-1decf.firebaseapp.com",
  databaseURL: "https://myblog-1decf.firebaseio.com",
  storageBucket: "myblog-1decf.appspot.com",
}
firebase.initializeApp(config)

ReactDOM.render(
	<Provider store={store}>
		<StyleRoot>
		    <Router history={hashHistory}>
		        <Route path="/" component={Layout}>
		            <IndexRoute component={AboutMe}>
		            </IndexRoute>
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
		            <Route path="underConstruct" component={UnderConstruct}>
		            </Route>
		        </Route>
		        <Route path="/demo" component={Demo}>
		        </Route>
		        <Route path="/facebook" component={Facebook}>
		        </Route>
		    </Router>
	    </StyleRoot>
	</Provider>

, app)
