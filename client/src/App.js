import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import ExampleCss from "./components/Navbar";


function App() {
  return (
    <Router>
      <div>
      <ExampleCss/>
      <div>
        
        <Switch>
          <Route exact path={[ "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        
      </div>
      </div>
    </Router>
  );
}

export default App;
