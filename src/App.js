import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Bookspec from "./pages/Bookspec";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/book/:id">
          <Bookspec />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
