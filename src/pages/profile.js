import React from "react";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";

const CodeSnippet = ({ code }) => (
  <div className="code-snippet__container">
    <div className="code-snippet__wrapper">
      <pre className="code-snippet__body">{code}</pre>
    </div>
  </div>
);

CodeSnippet.propTypes = {
  code: PropTypes.string.isRequired,
};

export const Profile = () => {
  const { user } = useAuth0();

  return (
    <div className="content-layout">
      <h1 className="content__title">Profile</h1>
      <div className="content__body">
        <p>
          You can use an ID Token to get the profile information of a logged-in
          user.
          <br />
          <strong>Only logged-in users can access this page.</strong>
        </p>
        <div className="profile-grid">
          <div className="profile__header">
            <img src={user.picture} alt="Profile" className="profile__avatar" />
            <div className="profile__headline">
              <h2 className="profile__title">{user.name}</h2>
              <span className="profile__description">{user.email}</span>
            </div>
          </div>
          <div className="profile__details">
            <CodeSnippet code={JSON.stringify(user, null, 2)} />
          </div>
        </div>
      </div>
    </div>
  );
};
