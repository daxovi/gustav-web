import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>
      <NavLink exact to="/" activeClassName="active">
        gustav <span id='training'>training</span>
        </NavLink>
      </h1>
    </div>
  )
}

export default Header