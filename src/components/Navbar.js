import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

const Navbar = () => (
  <div className="navbar-logo">
    <div className="logo">
      <img className="imglogo" src="https://cdn-icons-png.flaticon.com/512/3212/3212567.png" alt="logo" />
    </div>
    <ul className="navbar-links">
      <li>Rockets</li>
      <li>
        <NavLink to="/missions" activeClassName="active">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/profile" activeClassName="active">My Profile</NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
