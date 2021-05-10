import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const ExternalApi = () => {
  const [message, setMessage] = useState(null);
  const [activeMessage, setActiveMessage] = useState(null);

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const { getAccessTokenSilently } = useAuth0();

  const callApi = async (messageType) => {
    const response = await fetch(`${serverUrl}/api/messages/${messageType}`);

    if (!response.ok) {
      return `${response.status} ${response.statusText}`;
    }

    const { message } = await response.json();

    return message;
  };

  const callSecureApi = async (messageType) => {
    const token = await getAccessTokenSilently();

    const response = await fetch(`${serverUrl}/api/messages/${messageType}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return `${response.status} ${response.statusText}`;
    }

    const { message } = await response.json();

    return message;
  };

  const getMessage = async (type) => {
    try {
      const message =
        type === "public" ? await callApi(type) : await callSecureApi(type);

      setActiveMessage(type);
      setMessage(message);
    } catch (error) {
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
