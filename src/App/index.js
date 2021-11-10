import React from "react";
import Home from "../Home/index";
import ContactUs from "../ContactUs/index";
import Watches from "../Watches/index";
import About from "../About/index";
import Jewlery from "../Jewlery/index";

import FormSuccessful from "../ContactUs/components/FormSuccessful";

import { Nav, Navbar } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import { Body, Header, Title, TitleBox } from "./style.js";
function App() {
  return (
    <Header>
      <Body>
        <Router>
          <TitleBox>
            <Title>The Mundo Group</Title>
          </TitleBox>
          <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Navbar.Brand>
              {"  "}
              <Link to="/">
                <img
                  src="444-4447220_clipart-earth-logo-clipart-earth-logo-transparent-globe.png"
                  alt=""
                  width="30"
                  height="30"
                ></img>
                The Mundo Group
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contact">Contact Us</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/watches">Pre-Owned Watches</Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/jewlery">Jewlery</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/watches" component={Watches}></Route>
            <Route path="/jewlery" component={Jewlery}></Route>
            <Route path="/contact/success" component={FormSuccessful}></Route>
            <Route path="/contact" component={ContactUs}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
      </Body>
    </Header>
  );
}

export default App;
