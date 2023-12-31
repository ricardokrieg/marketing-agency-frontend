import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './Components/App/App'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider } from "@auth0/auth0-react"
import { BrowserRouter } from "react-router-dom"

import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN || ''}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ''}
        redirectUri={window.location.origin}
        audience={process.env.REACT_APP_AUTH0_AUDIENCE}
        scope='read:current_user'
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
