import React from "react";
import PropTypes from "prop-types";

const NextStep = ({ title, description, resourceUrl }) => (
  <div className="next-step">
    <h3 className="next-step__headline">
      <a
        className="next-step__link"
        target="_blank"
        rel="noopener noreferrer"
        href={resourceUrl}
      >
        <img
          className="next-step__icon"
          src="https://images.ctfassets.net/23aumh6u8s0i/3XjgU91NyZtuzUBDmqaG4Q/1f4add38d042abf421fdd099610db855/external-link.svg"
          alt="external link icon"
          width="20"
          height="20"
        />
        <span className="next-step__title">{title}</span>
      </a>
    </h3>
    <p className="next-step__description">{description}</p>
  </div>
);

NextStep.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  resourceUrl: PropTypes.string.isRequired,
};

export const NextSteps = () => (
  <div className="next-steps">
    <h2 className="next-steps__title">What can I do next?</h2>
    <div className="next-steps__grid">
      <NextStep
        title="Configure Other Identity Providers"
        description="Auth0 supports social providers as Facebook, Twitter, Instagram and 100+, Enterprise providers as Microsoft Office 365, Google Apps, Azure, and more. You can also use any OAuth2 Authorization Server."
        resourceUrl="https://auth0.com/docs/connections"
      />
      <NextStep
        title="Enable Multi-Factor Authentication"
        description="Add an extra layer of security by enabling Multi-factor Authentication, requiring your users to provide more than one piece of identifying information. Push notifications, authenticator apps, SMS, and DUO Security are supported."
        resourceUrl="https://auth0.com/docs/multifactor-authentication"
      />
      <NextStep
        title="Learn About Anomaly Detection"
        description="Auth0 can detect anomalies and stop malicious attempts to access your application. Anomaly detection can alert you and your users of suspicious activity, as well as block further login attempts."
        resourceUrl="https://auth0.com/docs/anomaly-detection"
      />
      <NextStep
        title="Learn About Actions"
        description="Actions are functions that allow you to customize the behavior of Auth0. Each action is bound to a specific triggering event on the Auth0 platform. Auth0 invokes the custom code of these Actions when the corresponding triggering event is produced at runtime."
        resourceUrl="https://auth0.com/docs/actions"
      />
    </div>
  </div>
);
