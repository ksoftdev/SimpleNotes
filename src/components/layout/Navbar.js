import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav>
    <div className="nav-wrapper green lighten-2">
      <Link to="/" className="brand-logo">Notebook</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/favorites">Favorites</NavLink></li>
      </ul>
    </div>
    </nav>
    )
}

export default Navbar
