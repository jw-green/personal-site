import React, { Component } from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';

import './App.css';

import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import TravelTimeline from './pages/TravelTimeline';
import CurrentTravel from './pages/CurrentTravel';
import ComingSoon from './pages/ComingSoon';
import Algorithms from './pages/Algorithms';
import Azad from './pages/Azad';
import Scrapers from './pages/Scrapers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/travel-timeline" component={TravelTimeline}/>
        <Route exact path="/algorithms" component={Algorithms}/>
        <Route exact path="/azad" component={Azad}/>
        <Route exact path="/scrapers" component={Scrapers}/>
        <Route exact path="/current-travel" component={CurrentTravel}/>
        <Route exact path="/coming-soon" component={ComingSoon}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
