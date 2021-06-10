import React from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { SideBar } from '../components/sideBar/SideBar';
import './App.css';
import { Switch, Route, useLocation} from 'react-router-dom'
import { Results } from '../components/results/Results';
import { AnimatePresence } from 'framer-motion';
import { ExpandedView } from '../components/expandedView/ExpandedView';

import "./Mobile.css"

function App() {

  const location = useLocation()

  return (
    <div className="App">
      <Navigation />
      <SideBar />
      <AnimatePresence>
        <Results />
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact={true} render={() => {
            return null
          }} />
          <Route path="/image/:id" component={ExpandedView} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
