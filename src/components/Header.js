import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>
    <a href="/" >
        gustav <span id='training'>training</span>
        </a>
      </h1>
    </div>
  )
}

export default Header