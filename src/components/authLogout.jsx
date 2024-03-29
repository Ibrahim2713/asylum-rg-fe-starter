import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LogoutButton = () => {
  const { logout, isLoading } = useAuth0();

  return (
    <button
      style={{ backgroundColor: 'red', width: 100, height: 50, color: 'white' }}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      {isLoading ? 'Logging out...' : 'Log out'}
    </button>
  );
};

export default LogoutButton;
