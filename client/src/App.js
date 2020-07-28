import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Mission from "./pages/Mission"; 
import Detail from "./pages/Detail";
import FAQ from "./pages/FAQ"; 
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import ExampleCss from "./components/Navbar";
import Footer from "./components/Footer"; 




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
          <Route exact path="/mission">
            <Mission />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        
      </div>
      <br></br>
      <Footer/>
      </div>
      <br></br>
    
    </Router>
  );
}

export default App;
