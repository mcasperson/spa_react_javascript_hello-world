import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const ExternalApi = () => {
  const [message, setMessage] = useState(null);
  const [activeMessage, setActiveMessage] = useState(null);

  const serverUrl = process.env.REACT_APP_API_SERVER_URL;
  const { getAccessTokenSilently } = useAuth0();

  const callApi = async (url, config = {}) => {
    let options = {};

    if (config.secure) {
      const token = await getAccessTokenSilently();

      options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        ...options,
      };
    }

    const response = await fetch(url, options);

    const { status, statusText, ok } = response;

    if (status === 404) {
      return `${status} ${statusText}`;
    }

    let { message } = await response.json();

    if (!ok) {
      message = `${status} ${message}`;
    }

    return message;
  };

  const getMessage = async (type) => {
    const resourceUrl = `${serverUrl}/api/messages/${type}`;
    setActiveMessage(type);

    const config = {};

    if (type !== "public") {
      config.secure = true;
    }

    try {
      const message = await callApi(resourceUrl, config);

      setMessage(message);
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  useEffect(() => {
    getMessage("public");
  }, []);

  return (
    <div className="content-layout">
      <h1 className="content__title">External API</h1>
      <div className="content__body">
        <p>
          You can use the buttons below make calls to an external API.
          <br />
          <strong>Only logged-in users can access this page.</strong>
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
