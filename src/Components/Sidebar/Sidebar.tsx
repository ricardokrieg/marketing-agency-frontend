import React from 'react';
import {Link} from "react-router-dom";
import LogoutButton from "../../LogoutButton";
import './style.css';

function Sidebar() {
  return (
    <div id='sidebar'>
      <img src='https://image.flaticon.com/icons/png/512/87/87390.png' id='logo' />
      <ul>
        <li className='current'>
          <a href='/'>
            <span className='material-icons-outlined'>space_dashboard</span>
            Overview
          </a>
        </li>

        <li className=''>
          <Link to="/mass-dm">
            <span className='material-icons-outlined'>mail</span>
            Mass DM
          </Link>
        </li>

        <li className=''>
          <a>
            <span className='material-icons-outlined'>credit_card</span>
            Payments
          </a>
        </li>

        <li className=''>
          <a>
            <span className='material-icons-outlined'>question_answer</span>
            Support
          </a>
        </li>

        <li className=''>
          <LogoutButton />
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
