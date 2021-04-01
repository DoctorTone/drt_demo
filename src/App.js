import ReactDOM from "react-dom";
import React, { useContext } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experiments from "./pages/Experiments";
import Contact from "./pages/Contact";
import MedicalViz from "./pages/MedicalViz";

function App() {
  return (
    <>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={750} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/portfolio/medical" component={MedicalViz} />
                <Route exact path="/experiments" component={Experiments} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </>
  );
}

export default App;
