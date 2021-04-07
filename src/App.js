import React, {useState} from "react";
import { Transition } from '@tailwindui/react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewNavBar from "./components/NewNavBar";
import Home from "./containers/Home";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router>
      <NewNavBar toggle = {toggle}/>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
      <Dropdown/>
      </Transition>
      <Switch>
        <Route path="/cookies" exact component={Home}></Route>
        {/* <Route path="/cookies/about" component={NewAbout}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
