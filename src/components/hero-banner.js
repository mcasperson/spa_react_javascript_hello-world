import React from "react";

export const HeroBanner = () => {
  const logo =
    "https://images.ctfassets.net/23aumh6u8s0i/7gnlQKjeLoXRyzQuhtivWx/8be853998db850d690bdba1a862b22d8/react.svg";

  const openQuickStart = () => {
    window.open(
      "https://auth0.com/docs/quickstart/spa/react",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div className="hero-banner">
      <img className="hero-banner__logo" src={logo} alt="React logo" />
      <h1 className="hero-banner__headline">Hello, React World!</h1>
      <p className="hero-banner__description">
        This is a sample application that demonstrates the authentication flow
        for a React app using <strong>Auth0</strong>.
      </p>

      <button onClick={openQuickStart} className="button button--secondary">
        Check out the React Quickstart →
      </button>
    </div>
  );
};
