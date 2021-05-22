import React from "react";

import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <div className="nav-bar__brand">
          <NavLink to="/">
            <img
              className="nav-bar__logo"
              src="https://images.ctfassets.net/23aumh6u8s0i/1UiaijF2PoaHIfcaIMRWYZ/cba84a2df9ba67f48e80aa117d0c78a3/auth0-shield.svg"
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
      </nav>
    </div>
  );
};
