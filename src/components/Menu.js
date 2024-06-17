import React from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu'>
      <Link to="/">apps</Link>
      <Link to="/privacypolicy">privacy</Link>
      <Link to="/contacts">contacts</Link>
      <Link to="/demo">demo</Link>
    </div>
  )
}

export default Menu