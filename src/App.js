import ReactDOM from "react-dom";
import React from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experiments from "./pages/Experiments";
import Contact from "./pages/Contact";
import MedicalViz from "./pages/MedicalViz";

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="moveToLeftFromRight"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/portfolio/medical" component={MedicalViz} />
                <Route exact path="/experiments" component={Experiments} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
              </Switch>
            </PageTransition>
          );
        }}
      />
    </Router>
  );
}

export default App;
