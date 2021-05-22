import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const ExternalApi = () => {
  const [message, setMessage] = useState(null);
  const [activeMessage, setActiveMessage] = useState(null);

  const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;
  const { getAccessTokenSilently } = useAuth0();

  const callApi = async (url, config = {}) => {
    let fetchOptions = {};

    if (config.secure) {
      const token = await getAccessTokenSilently();

      fetchOptions = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        ...fetchOptions,
      };
    }

    const response = await fetch(url, fetchOptions);
    const responseBody = await response.json();

    if (response.ok) {
      return { error: null, data: responseBody };
    }

    return {
      error: {
        status: response.status,
        message: responseBody.message,
      },
      data: null,
    };
  };

  const getMessage = async (type) => {
    /**
     * To call the /api/messages/admin endpoint, you need to log in
     * as a user that has the messages-admin role, which in turn
     * has the read:admin-messages permission.
     * If you need help doing so, check out the following resources.
     * Create roles:
     * https://auth0.com/docs/authorization/rbac/roles/create-roles
     * Create permissions:
     * https://auth0.com/docs/get-started/dashboard/add-api-permissions
     * Add permissions to roles:
     * https://auth0.com/docs/authorization/rbac/roles/add-permissions-to-roles
     * Assign roles to users:
     * https://auth0.com/docs/users/assign-roles-to-users
     */

    const resourceUrl = `${apiServerUrl}/api/messages/${type}`;
    setActiveMessage(type);

    const config = {};

    if (type !== "public") {
      config.secure = true;
    }

    try {
      const { error, data } = await callApi(resourceUrl, config);
      if (data) {
        setMessage(data.message);
        return;
      }

      if (error) {
        setMessage(`Error ${error.status}: ${error.message}`);
        return;
      }

      setMessage("Unable to retrieve messages.");
    } catch (error) {
      setMessage(error.message || error);
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
          <code className="messages-grid__message">{message}</code>
        </div>
      </div>
    </div>
  );
};
