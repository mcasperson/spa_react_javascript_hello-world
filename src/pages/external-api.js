import React, { useState } from "react";

export const ExternalApi = () => {
  const messages = {
    public: "Anyone can see this message.",
    protected: "Only authenticated users should see this message.",
    admin:
      "Only authenticated users with the read:admin-messages permission should see this message.",
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
          You can use the buttons below to retrieve the corresponding message
          from a local store.
          <br />
          <strong>Only authenticated users should access this page.</strong>
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
          <code className="messages-grid__message">{message}</code>
        </div>
      </div>
    </div>
  );
};
