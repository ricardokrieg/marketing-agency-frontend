import React from 'react';
import {NavLink} from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";
import './style.css';

function Sidebar() {
  return (
    <div id='sidebar'>
      <img alt='Marketing Agency' src='https://image.flaticon.com/icons/png/512/87/87390.png' id='logo' />
      <ul>
        <li>
          <NavLink exact to="/" activeClassName='current'>
            <span className='material-icons-outlined'>space_dashboard</span>
            Overview
          </NavLink>
        </li>

        <li>
          <NavLink to="/mass-dm" activeClassName='current'>
            <span className='material-icons-outlined'>mail</span>
            Mass DM
          </NavLink>
        </li>

        <li>
          <NavLink exact to="/" activeClassName='current'>
            <span className='material-icons-outlined'>credit_card</span>
            Payments
          </NavLink>
        </li>

        <li>
          <NavLink exact to="/" activeClassName='current'>
            <span className='material-icons-outlined'>question_answer</span>
            Support
          </NavLink>
        </li>

        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
