import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import BrowseTaskPage from '../pages/BrowseTaskPage';

import React, { Component } from 'react'

class RouterOOR extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/BrowseTasks" component={BrowseTaskPage} /> 
          {/* <Route path="/" exact component={} /> */}
          {/* <Route path="/btn" exact component={Button} /> */}
          {/* <Route path="/sign-up" exact component={Signup} /> */}
          {/* <Route path="/md" exact component={Modal} /> */}
        </Switch>
      </Router>
      </div>
    )
  }
}


export default RouterOOR;

