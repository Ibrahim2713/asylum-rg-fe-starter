import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LoginButton = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  return (
    <button
      style={{
        backgroundColor: '#404C4A',
        width: 100,
        height: 50,
        color: 'white',
      }}
      onClick={() => loginWithRedirect()}
    >
      {isLoading ? 'Logging in...' : 'Log in'}{' '}
    </button>
  );
};

export default LoginButton;
