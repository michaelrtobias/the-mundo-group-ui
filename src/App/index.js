import React, { useEffect, useState } from "react";
import Home from "../Home/index";
import ContactUs from "../ContactUs/index";
import About from "../About/index";
import Products from "../Products/index";
import Footer from "../Footer/index";
import ProductPage from "../Products/ProductPage/index";
import FormSuccessful from "../ContactUs/components/WishList/components/FormSuccessful";
import { Body, Page } from "./style.js";
import NavBar from "../NavBar/index";
import Cookies from "js-cookie";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Amplify, { Auth, Hub } from "aws-amplify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Admin from "../Admin/index";
import InventoryDashboard from "../Admin/components/InventoryDashboard/index";
const queryClient = new QueryClient();
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
      <QueryClientProvider client={queryClient}>
        <DndProvider backend={HTML5Backend}>
          <Page>
            <Body>
              <Router>
                <NavBar isAdmin={isAdmin} />

                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/admin/inventory">
                    <InventoryDashboard userData={userData} />
                  </Route>
                  <Route path="/admin">
                    <Admin isAdmin={isAdmin} userData={userData} />
                  </Route>
                  <Route path="/watches/:brand/:colorway">
                    <ProductPage />
                  </Route>
                  <Route path="/watches">
                    <Products />
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
            <Footer isAdmin={isAdmin} />
          </Page>
        </DndProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
