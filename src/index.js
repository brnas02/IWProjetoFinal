import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-wqp0knms2g5juxq6.us.auth0.com"
    clientId="pLiemNKhArkn9dYkk5D3phu6IYCECe8G"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
        <App />
  </Auth0Provider>

);
