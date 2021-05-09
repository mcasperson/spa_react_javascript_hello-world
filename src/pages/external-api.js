import React, { useState } from "react";

export const ExternalApi = () => {
  const messages = {
    public: "The API doesn't require an access token to share this message.",
    protected: "The API successfully validated your access token.",
    admin: "The API successfully recognized you as an admin.",
  };

  const [message, setMessage] = useState(messages.public);
  const [activeMessage, setActiveMessage] = useState("public");

  const getMessage = (type) => {
    setActiveMessage(type);
    return setMessage(messages[type]);
  };

  return (
    <div className="content-layout">
      <h1 className="content__title">External API</h1>
      <div className="content__body">
        <p>
          You will use a button to call an external API using an access token,
          and the API will validate it using the API's audience value.
          <br />
          <strong>This route should be protected</strong>.
        </p>

        <div className="messages-grid">
          <div className="messages-grid__header">Messages</div>
          <div className="messages-grid__options">
            <div
              onClick={() => getMessage("public")}
              className={`messages-grid__option ${
                activeMessage === "public" && "messages-grid__option--active"
              }`}
            >
              Public
            </div>
            <div
              onClick={() => getMessage("protected")}
              className={`messages-grid__option ${
                activeMessage === "protected" && "messages-grid__option--active"
              }`}
            >
              Protected
            </div>
            <div
              onClick={() => getMessage("admin")}
              className={`messages-grid__option ${
                activeMessage === "admin" && "messages-grid__option--active"
              }`}
            >
              Admin
            </div>
          </div>
          <code className="messages-grid__message">
            {JSON.stringify(message, null, 2)}
          </code>
        </div>
      </div>
    </div>
  );
};
