import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import MassDM from "./Components/MassDM";
import { Route, Link } from "react-router-dom";

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
      <div id='sidebar'>
        <img src='https://image.flaticon.com/icons/png/512/87/87390.png' id='logo' />
        <ul>
          <li className='current'>
            <a href='/'>
              <span className='material-icons-outlined space_dashboard'></span>
              Overview
            </a>
          </li>

          <li className=''>
            <Link to="/mass-dm">
              <span className='material-icons-outlined mail'></span>
              Mass DM
            </Link>
          </li>

          <li className=''>
            <a>
              <span className='material-icons-outlined credit_card'></span>
              Payments
            </a>
          </li>

          <li className=''>
            <a>
              <span className='material-icons-outlined question_answer'></span>
              Support
            </a>
          </li>

          <li className=''>
            <LogoutButton />
          </li>
        </ul>
      </div>

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
