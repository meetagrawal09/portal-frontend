import React from 'react'
import InternshipForm from './InternshipForm'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import ProjectForm from "./ProjectForm";
import Profile from './Profile';

function App() {
  return (
    
  <Router>   
    <div className="app">
      <Switch>
        <Route path="/internship">
          <InternshipForm/>
        </Route>
        <Route path="/project">
          <ProjectForm/>
        </Route>
        <Route path="/">
          <Profile/>
        </Route>
      </Switch>
    </div>
  </Router>
    
  )
}

export default App
