import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar } from "./components/nav-bar";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { ExternalApi } from "./pages/external-api";
import { Footer } from "./components/footer";
import { Loader } from "./components/loader";
import { ProtectedRoute } from "./security/protected-route";

import { useAuth0 } from "@auth0/auth0-react";

export const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <Loader />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <NavBar />
      <div className="page-layout__content">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
