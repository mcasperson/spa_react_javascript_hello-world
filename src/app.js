import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar } from "./components/nav-bar";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { ExternalApi } from "./pages/external-api";
import { Footer } from "./components/footer";

export const App = () => {
  return (
    <div className="page-layout">
      <NavBar />
      <div className="page-layout__content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
