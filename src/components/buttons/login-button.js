import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="button button--primary button--compact"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};
