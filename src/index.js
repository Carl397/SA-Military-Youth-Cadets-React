import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import AboutUs from './views/about-us'
import ImpactProjects from './views/impact-projects'
import GetInvolved from './views/get-involved'
import ProgramsActivities from './views/programs-activities'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={ImpactProjects} exact path="/impact-projects" />
        <Route component={GetInvolved} exact path="/get-involved" />
        <Route
          component={ProgramsActivities}
          exact
          path="/programs-activities"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
