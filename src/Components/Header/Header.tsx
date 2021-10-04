import React from 'react';
import './style.css';

interface HeaderProps {
  user: any
}

function Header(props: HeaderProps) {
  return (
    <div id='header'>
      <div id='user'>
        {props.user?.name}
        <br/>
        {props.user?.email}
      </div>
    </div>
  )
}

export default Header;
