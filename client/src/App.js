// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/success" component={Success} />
        <Route path="/cancel" component={Cancel} />
      </Switch>
    </Router>
  );
}

export default App;
