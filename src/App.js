import React, { useState } from "react";
import { Transition } from "@tailwindui/react";
import Footer from "./containers/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewNavBar from "./components/NewNavBar";
import Home from "./containers/Home";
import Dropdown from "./components/Dropdown";
import OutsideAlerter from "./scripts/OutsideAlerter";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    // console.log(isOpenButton, isOpen);
    // if (isOpenButton) {
    setIsOpen(!isOpen);
    // }
  };
  // const toggleButton = () => {
  //   console.log(isOpenButton, isOpen);
  //   setIsOpenButton(!isOpenButton);
  //   setIsOpen(true);
  // };
  return (
    <Router>
      <NewNavBar isOpen={isOpen} toggle={toggle} />
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <OutsideAlerter toggle={toggle}>
          {" "}
          {/*check if outside the dropdown, then close*/}
          <Dropdown />
        </OutsideAlerter>
      </Transition>
      <Switch>
        <Route path="/cookies" exact component={Home}></Route>
        {/* <Route path="/cookies/about" component={NewAbout}></Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
