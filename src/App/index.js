import "bootstrap/dist/css/bootstrap.css";
import Amplify, { Auth, Hub } from "aws-amplify";
import { Body, Page } from "./style.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "../About/index";
import Admin from "../Admin/index";
import ContactUs from "../ContactUs/index";
import Cookies from "js-cookie";
import { DndProvider } from "react-dnd";
import Footer from "../Common/Footer";
import FormSuccessful from "../ContactUs/components/WishList/components/FormSuccessful";
import { HTML5Backend } from "react-dnd-html5-backend";
import Home from "../Home/index";
import InventoryDashboard from "../Admin/InventoryDashboard/index";
import NavBar from "../Common/NavBar";
import NotFound from "../NotFound";
import ProductPage from "../Product";
import Products from "../Products";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RequireAuth from "../utils/requireAuth";
const queryClient = new QueryClient();
function App() {
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthFinished, setIsAuthFinished] = useState(false);
  const getCurrentUserDetails = async () => {
    const isCookie = Cookies.get("amplify-redirected-from-hosted-ui");
    if (isCookie) {
      setIsAdmin(true);
    }
    try {
      const { attributes: user } = await Auth.currentAuthenticatedUser();
      setUserData(user);
      setIsAdmin(true);
      setIsAuthFinished(true);
    } catch (error) {
      setIsAuthFinished(true);
      setIsAdmin(false);

      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUserDetails();
  }, []);

  useEffect(() => {
    const awsauth = {
      domain: "admin.southwestwatches.com",
      scope: ["aws.cognito.signin.user.admin", "email", "openid", "phone"],
      redirectSignIn: "https://southwestwatches.com",
      redirectSignOut: "https://southwestwatches.com",
      responseType: "code",
    };
    Amplify.configure({
      Auth: {
        region: "us-east-1",
        userPoolId: "us-east-1_AXiINZ5Xi",
        userPoolWebClientId: "2raim5b443bcsrfbj97755n4k8",
        cookieStorage: {
          domain: "southwestwatches.com",
          path: "/",
          expires: 365,
          secure: true,
        },
        mandatorySignIn: false,
        redirectSignIn: "https://southwestwatches.com",
        redirectSignOut: "https://southwestwatches.com",
      },
    });
    Auth.configure({ oauth: awsauth });
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
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
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DndProvider backend={HTML5Backend}>
          <Page>
            <Body>
              <Router>
                <NavBar isAdmin={isAdmin} />
                <Switch>
                  <Route exact path="/about">
                    <About />
                  </Route>
                  <Route exact path="/admin/inventory">
                    <RequireAuth
                      isAdmin={isAdmin}
                      isAuthFinished={isAuthFinished}
                    >
                      <InventoryDashboard
                        userData={userData}
                        isAdmin={isAdmin}
                      />
                    </RequireAuth>
                  </Route>
                  <Route exact path="/admin">
                    <RequireAuth
                      isAdmin={isAdmin}
                      isAuthFinished={isAuthFinished}
                    >
                      <Admin isAdmin={isAdmin} userData={userData} />
                    </RequireAuth>
                  </Route>
                  <Route exact path="/watches/:brand/:colorway">
                    <ProductPage />
                  </Route>
                  <Route exact path="/watches">
                    <Products />
                  </Route>
                  <Route exact path="/contact/success">
                    <FormSuccessful />
                  </Route>
                  <Route exact path="/contact">
                    <ContactUs />
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route component={NotFound} />
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
