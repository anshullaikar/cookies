import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./containers/Form";
import NewNavBar from "./components/NewNavBar";
import Home from "./containers/Home";

import GlobalStyle from "./styles/globalStyles";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NewNavBar />
      <Switch>
        <Route path="/cookies" exact component={Home}></Route>
        {/* <Route path="/cookies/about" component={NewAbout}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
