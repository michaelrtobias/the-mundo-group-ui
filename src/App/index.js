import React, { useEffect, useState } from "react";
import Home from "../Home/index";
import ContactUs from "../ContactUs/index";
import About from "../About/index";
// import About from "../About/index";
import Inventory from "../Inventory/index";
import Footer from "../Footer/index";
import FormSuccessful from "../ContactUs/components/WishList/components/FormSuccessful";
import { Body, Page } from "./style.js";
import NavBar from "../NavBar/index";
import Cookies from "js-cookie";

import Amplify, { Auth, Hub, API } from "aws-amplify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Admin from "../Admin/index";
import EditInventory from "../Admin/components/EditInventory/index";
function App() {
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const awsauth = {
    domain: "admin.southwestwatches.com",
    scope: ["aws.cognito.signin.user.admin", "email", "openid", "phone"],
    redirectSignIn: "http://localhost:3000",
    redirectSignOut: "https://localhost:3000",
    responseType: "code",
  };
  const getCurrentUserDetails = async () => {
    try {
      const { attributes: user } = await Auth.currentAuthenticatedUser();
      console.log("user", user);
      setUserData(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const isCookie = Cookies.get("amplify-redirected-from-hosted-ui");
    if (isCookie && userData === null) {
      setIsAdmin(true);
      getCurrentUserDetails();
    } else if (isCookie) {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    Amplify.configure({
      Auth: {
        region: "us-east-1",
        userPoolId: "us-east-1_AXiINZ5Xi",
        userPoolWebClientId: "2raim5b443bcsrfbj97755n4k8",
        cookieStorage: {
          domain: "localhost",
          path: "/",
          expires: 365,
          secure: true,
        },
        mandatorySignIn: false,
        redirectSignIn: "http://localhost:3000",
        redirectSignOut: "http://localhost:3000",
        oauth: {
          domain: "admin.southwestwatches.com",
          scope: ["aws.cognito.signin.user.admin", "email", "openid", "phone"],
          redirectSignIn: "http://localhost:3000",
          redirectSignOut: "http://localhost:3000",
          responseType: "code",
        },
      },
    });
    Auth.configure({ oauth: awsauth });
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          console.log("data", data);
          setUserData(data);
          setIsAdmin(true);
          break;
        case "signOut":
          setUserData({});
          setIsAdmin(false);
          break;
        default:
          break;
      }
    });
  });

  return (
    <>
      <Page>
        <Body>
          <Router>
            <NavBar isAdmin={isAdmin} />

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/admin/edit-inventory">
                <EditInventory userData={userData} />
              </Route>
              <Route path="/admin">
                <Admin isAdmin={isAdmin} userData={userData} />
              </Route>
              <Route path="/watches">
                <Inventory />
              </Route>
              <Route path="/contact/success">
                <FormSuccessful />
              </Route>
              <Route path="/contact">
                <ContactUs />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </Body>

        <Footer />
      </Page>
    </>
  );
}

export default App;
