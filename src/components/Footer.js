import React from 'react';
import "./Footer.css";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="/demo" activeClassName="active">
        demo
      </NavLink>
        </div>
  )
}

export default Footer