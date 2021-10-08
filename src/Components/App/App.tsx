import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import Dashboard from "../Dashboard/Dashboard";
import MassDM from "../MassDM/MassDM";
import {Route} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import './style.css';
import {useApi} from '../../Hooks/use-api'

function App() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const opts = {
    audience: 'marketing-agency',
    scope: 'read:users email',
  };
  useApi(
    'https://api.example.com/users',
    opts
  );

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect().then()
    return <div></div>;
  }

  return (
    <div id='main'>
      <Sidebar />

      <div id='content'>
        <Header user={user} />

        <div id='main-content'>
          <Route exact path='/' component={Dashboard} />
          <Route path='/mass-dm' component={MassDM} />
        </div>
      </div>
    </div>
  )
}

export default App;
