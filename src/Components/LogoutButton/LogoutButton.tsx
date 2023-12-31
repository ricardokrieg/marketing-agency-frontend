import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    // eslint-disable-next-line
    <a onClick={() => logout({ returnTo: window.location.origin })}>
      <span className='material-icons-outlined'>logout</span>
      Log Out
    </a>
  );
};

export default LogoutButton;
