import React from "react";

import { NavLink } from "react-router-dom";
import { AuthenticationButton } from "../security/authentication-button";

export const NavBar = () => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <div className="nav-bar__brand">
          <NavLink to="/">
            <img
              className="nav-bar__logo"
              src="https://images.ctfassets.net/23aumh6u8s0i/66PimSweOgch2IecnHiyca/2d8cfd25a66d2ac297ab4a9ff3e2f6f1/auth0-shield.svg"
              alt="Auth0 shield logo"
              width="35.98"
              height="40"
            />
          </NavLink>
        </div>
        <div className="nav-bar__tabs">
          <NavLink
            to="/profile"
            exact
            className="nav-bar__tab"
            activeClassName="nav-bar__tab--active"
          >
            Profile
          </NavLink>
          <NavLink
            to="/external-api"
            exact
            className="nav-bar__tab"
            activeClassName="nav-bar__tab--active"
          >
            External API
          </NavLink>
        </div>
        <div className="nav-bar__actions">
          <AuthenticationButton />
        </div>
      </nav>
    </div>
  );
};
