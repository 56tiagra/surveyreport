import React from 'react';
import 'normalize.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Listing from './components/Listing';
import Detail from './components/Detail';
import NotFound from './NotFound';

const App = () => {
  return (
    <div className="container">
    <Router>
      <Switch>
        <Route exact path="/" component={Listing} />
        <Route path="/surveys/:id" component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
