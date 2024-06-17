import React from 'react'
import "./Menu.css"
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu'>
      <NavLink exact to="/" activeClassName="active">
        apps
      </NavLink>
      <NavLink to="/contacts" activeClassName="active">
        contacts
      </NavLink>
      <NavLink to="/privacypolicy" activeClassName="active">
        privacy
      </NavLink>
    </div>
  )
}

export default Menu