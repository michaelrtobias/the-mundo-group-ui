import React from "react";
import Home from "../Home/index";
import ContactUs from "../ContactUs/index";
import Watches from "../Watches/index";
// import About from "../About/index";
import Jewlery from "../Jewlery/index";
import Footer from "../Footer/index";
import FormSuccessful from "../ContactUs/components/WishList/components/FormSuccessful";

import NavBar from "../NavBar/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import { Body, Page } from "./style.js";
function App() {
  return (
    <>
      <Page>
        <Body>
          <Router>
            <NavBar />

            <Switch>
              {/* <Route path="/about" component={About}></Route> */}
              <Route path="/watches" component={Watches}></Route>
              <Route path="/jewlery" component={Jewlery}></Route>
              <Route path="/contact/success" component={FormSuccessful}></Route>
              <Route path="/contact" component={ContactUs}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </Router>
        </Body>

        <Footer />
      </Page>
    </>
  );
}

export default App;
