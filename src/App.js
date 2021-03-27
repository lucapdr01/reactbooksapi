import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Bookspec from "./pages/Bookspec";
import Error from "./pages/Error";

/* Routes tree
root: Home Page
        - Book specific page (id)
        - Error page in case of wrong urls
*/
 
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
        <Route path="*">
          <Error />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
