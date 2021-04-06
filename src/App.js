import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./containers/Form";

import About from "./containers/About";

import GlobalStyle from "./styles/globalStyles";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar/>
      <Switch>
          <Route exact path="/cookies">
            <Hero />
          </Route>
          <Route path="/cookies/about">
            <About />
          </Route>
          <Route path="/cookies/form">
            <Form />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
