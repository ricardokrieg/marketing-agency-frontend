import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import MassDM from "./Components/MassDM/MassDM";
import {Route} from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    let _ = loginWithRedirect();
    return <div></div>;
  }

  return (
    <div id='main'>
      <Sidebar />

      <div id='content'>
        <div id='header'>
          <div id='user'>
            {user?.name}
            <br/>
            {user?.email}
          </div>
        </div>

        <div id='main-content'>
          <Route path='/mass-dm' component={MassDM} />
        </div>
      </div>
    </div>
  )
}

export default App;
