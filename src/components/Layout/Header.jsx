import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import LoginButton from '../authLogin';
import LogoutButton from '../authLogout';
import { useAuth0 } from '@auth0/auth0-react';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        padding: '30px',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ marginRight: '20px' }}>
          <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
            Home
          </Link>
          <Link to="/graphs" style={{ color: '#E2F0F7' }}>
            Graphs
          </Link>
        </div>
        <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
        {isAuthenticated && (
          <div
            className="user-section"
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '10px',
            }}
          >
            <img src={user.picture} className="user-image" />
            <div style={{ marginLeft: '10px' }}>
              <h3 className="user-info"> Admin:{user.name}</h3>
              <p className="user-info"> Email:{user.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { HeaderContent };
