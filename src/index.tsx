import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-y6x2es3x.us.auth0.com'
      clientId='kbPPsen1T9Z4g3XXGPIK7HBtMXid94Fp'
      redirectUri={window.location.origin}
      audience='https://dev-y6x2es3x.us.auth0.com/api/v2/'
      scope='read:current_user update:current_user_metadata'
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
